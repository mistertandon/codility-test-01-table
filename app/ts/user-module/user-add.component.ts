import {
    Component,
    OnInit
} from '@angular/core';

import {
    UserService
} from './../custom-services/user.service';

import {
    FormBuilder,
    FormGroup,
    Validators
} from '@angular/forms';

import {
    UserClass_I,
    userAddFormFields
} from './../custom-interfaces/user.interfaces';

@Component({
    templateUrl: "app/ts/user-module/user-add.component.html",
    styleUrls: ["app/ts/user-module/user-add.component.css"]
})
export class UserAddComponent implements OnInit {

    /**
     * This variable contains instance of FormGroup that is
     * recative form.
     *
     */
    public userAddForm: FormGroup;

    public formValidationFields: UserClass_I = {

        'name': '',
        'job': ''
    };

    public formValidationsFieldsMessages: Object = {

        'name': {
            'required': 'Provide Name',
            'minlength': 'Name must have atleast 4 characters.',
            'maxlength': 'Name must not have more then 8 characters.'
        },
        'job': {
            'required': 'Provide Job Name',
            'minlength': 'Job name must have atleast 4 characters.',
            'maxlength': 'Job name must not have more then 8 characters.'
        }

    };

    public constructor(private UserService_S: UserService, private FormBuilder_S: FormBuilder) {}

    ngOnInit(): void {

        this.buildUserAddFormReactive()
    }

    /**
     * This function is used to create user add form using FormBuilder
     * instance.
     *
     */
    public buildUserAddFormReactive(): void {

        this.userAddForm = this.FormBuilder_S.group({

            'name': [null, [
                Validators.required,
                Validators.minLength(4),
                Validators.maxLength(8)
            ]],
            'job': [null, [
                Validators.required,
                Validators.minLength(4),
                Validators.maxLength(8)
            ]]

        });

        this.userAddForm.valueChanges
            .subscribe((subscribedData) => {

                this.checkFormFieldsValidation_UACM();
            });

        this.checkFormFieldsValidation_UACM();
    }

    /**
     * We use this function to validate form fields as angualr 2 internal
     * service recognize any changes into form controls. We have subscribed to 
     * `valueChanges` property to trigger this function when angular 2 recognize
     * any chage.
     */
    public checkFormFieldsValidation_UACM() {

        if (!this.userAddForm) {

            return;
        }
        const FormRef = this.userAddForm;

        for (let formField in this.formValidationFields) {

            let formControl: any = FormRef.get(formField);

            this.formValidationFields[formField] = "";

            if (formControl && formControl.dirty && formControl.invalid) {

                for (let validation in formControl.errors) {

                    /**                                                                                                                         
                     * Here we will accumulate all validation messages corresponding to
                     * one field, currently passed in iteration
                     */
                    this.formValidationFields[formField] += this.formValidationsFieldsMessages[formField][validation];
                }

            }
        }
    }

    /**
     * This function is used to call UserService to add user.
     *
     */
    public postUserInfo() {

        this.UserService_S.addUser_USM(this.userAddForm.value)
            .subscribe((subscribeData) => {

                console.log(subscribeData);
            });

    }
}
