import { Component, OnInit } from '@angular/core';

import { Response } from '@angular/http';

import { ActivatedRoute } from '@angular/router';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { UserClass_I, userAddFormFields } from './../custom-interfaces/user.interfaces';

import { UserClassInterface, UserEditFormObject_I } from './../custom-interfaces/user-class.interface';

import { UserService } from './../custom-services/user.service';

@Component({
    templateUrl: "app/ts/user-module/user-edit.component.html",
    styleUrls: ["app/ts/user-module/user-edit.component.css"]
})
export class UserEditComponent implements OnInit {

    public user: UserEditFormObject_I;

    public userEditForm: FormGroup;

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

    constructor(
        private FormBuilder_S: FormBuilder,
        private ActivatedRoute_S: ActivatedRoute,
        private UserService_S: UserService
    ) { }

    ngOnInit(): void {

        this.ActivatedRoute_S.data
            .subscribe((editedUserData: {
                user: UserEditFormObject_I
            }) => {

                this.user = editedUserData.user;
                this.buildUserEditFormReactive();
            });


    }

    /**
     * This function is used to create user add form using FormBuilder
     * instance.
     *
     */
    public buildUserEditFormReactive(): void {

        this.userEditForm = this.FormBuilder_S.group({

            'id': [this.user.id],
            'name': [this.user.first_name, [
                Validators.required,
                Validators.minLength(4),
                Validators.maxLength(8)
            ]],
            'job': [this.user.last_name, [
                Validators.required,
                Validators.minLength(4),
                Validators.maxLength(8)
            ]]

        });

        this.userEditForm.valueChanges
            .subscribe((subscribedData) => {

                this.checkFormFieldsValidation_UECM();
            });

        this.checkFormFieldsValidation_UECM();
    }

    /**
     * This function is used to validate user edit form as angular 2 detect
     * any change in form control.
     *
     */
    public checkFormFieldsValidation_UECM() {

        if (!this.userEditForm) {

            return;
        }
        const FormRef = this.userEditForm;

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

    public updateUserInfo(): void {

        this.UserService_S.postUserDetail_USM(this.userEditForm.value)
            .subscribe((responseData: Response) => {

            });
    }

}
