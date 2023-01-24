import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

import { EmailService } from 'src/app/_services/email.service';
import { FormValidationService } from 'src/app/_services/form-validation.service';


@Component({
  selector: 'app-email-form',
  templateUrl: './email-form.component.html',
  styleUrls: ['./email-form.component.scss']
})

export class EmailFormComponent implements OnInit {

  // Email Form Group
  emailForm = new FormGroup({
    email: new FormControl(''),
    subject: new FormControl(''),
    message: new FormControl(''),
  });
  submitted = false;
  success = '';

  constructor(private formBuilder: FormBuilder,
              private emailService: EmailService,
              private customValidator : FormValidationService) {
    this.emailForm = this.formBuilder.group({
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
          Validators.maxLength(25)
        ]
      ],
      body: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(250)
        ]
      ]
    });
  }

  ngOnInit(): void {}

  get f(): { [key: string]: AbstractControl } {
    return this.emailForm.controls;
  }

  onSubmit(emailForm: string) {
    this.submitted = true;
    if (this.emailForm.invalid) {
      return;
    }
    this.emailService.sendEmail(emailForm).subscribe((_response: any) => {
      window.open("https://mailthis.to/confirm", "_blank")
    })
  }

}
