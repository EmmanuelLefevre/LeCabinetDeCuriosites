import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';

import { faRobot} from '@fortawesome/free-solid-svg-icons';

import { EmailService } from 'src/app/_services/email.service';
import { FormValidationService } from 'src/app/_services/form-validation.service';
import { SnackbarService } from 'src/app/_services/snackbar.service';
import { SpinnerService } from 'src/app/_services/spinner.service';

import { IEmail } from './IEmail';


@Component({
  selector: 'app-email-form',
  templateUrl: './email-form.component.html',
  styleUrls: ['./email-form.component.scss']
})

export class EmailFormComponent implements OnInit {

  faRobot = faRobot;
  
  // Email Form Group
  emailForm = this.formBuilder.group({
    email: [
      '',
      [
        Validators.required,
        Validators.email,
        this.customValidator.validEmail()
      ]
    ],
    subject: [
      '',
      [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(125)
      ]
    ],
    body: [
      '',
      [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(500)
      ]
    ]
  });

  constructor(private formBuilder: FormBuilder,
              private emailService: EmailService,
              private customValidator : FormValidationService,
              private snackbarService: SnackbarService,
              public spinnerService: SpinnerService) {}

  ngOnInit(): void {}

  get f(): { [key: string]: AbstractControl } {
    return this.emailForm.controls;
  }

  onSubmit(formDirective: any): void {
    if (!this.emailForm.valid) {
      return;
    }

    const formValue: IEmail = this.emailForm.getRawValue();
    this.emailService.sendEmail(formValue).subscribe(
      () => {
      const email = formValue.email;
      this.snackbarService.showNotification(`${email} votre message a bien été envoyé.`);
      }
    )
    formDirective.resetForm();
    this.emailForm.reset();
  }
    
}
