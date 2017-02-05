import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { loginForm_I } from './../custom-interfaces/login.interface';

@Component({
  templateUrl: 'app/ts/login/login.component.html',
  styleUrls: ['app/ts/login/login.component.css']
})
export class LoginComponent implements OnInit {

  /**
   * This variable store FormBuilder instance.
   */
  public loginFormReactive: FormGroup;

  public formValidationFields: loginForm_I = {

    'email': '',
    'password': ''
  }

  public formValidationFieldsMessages: Object = {

    'email': {
      'required': 'Enter E-mail Address'
    },
    'password': {
      'required': 'Enter Password'
    }
  }
  public constructor(private FormBuilder_S: FormBuilder) {

  }
  ngOnInit(): void {

    this.buildLoginFormReactive();
  }

  /**
   * This function is used to create `Login Form` using FormBuilder angular 2 service.
   */
  public buildLoginFormReactive(): void {

    this.loginFormReactive = this.FormBuilder_S.group({

      'email': [null, [Validators.required]],
      'password': [null, [Validators.required]]
    });

    this.loginFormReactive.valueChanges
      .subscribe((subscribedData) => {

        this.checkFormFieldsValidation();
      });

    this.checkFormFieldsValidation();
  }

  public checkFormFieldsValidation() {

    if (!this.loginFormReactive) {

      return;

    }

    const FORM_REF: FormGroup = this.loginFormReactive;

    for (let field in this.formValidationFields) {

      let fieldControl: any = FORM_REF.get(field);

      this.formValidationFields[field] = '';
      if (fieldControl && fieldControl.invalid && fieldControl.dirty) {
        for (let validation in fieldControl.errors) {

          this.formValidationFields[field] += this.formValidationFieldsMessages[field][validation];
        }
      }
    }


  }


}