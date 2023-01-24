import { Injectable } from '@angular/core';
import { AbstractControl, ValidatorFn } from '@angular/forms';


@Injectable({
  providedIn: 'root'
})

export class FormValidationService {

  validEmail(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: boolean } | null => {
      if (control.value == '') return null;

      let re = new RegExp('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$');
      if (re.test(control.value)) {
        return null;
      } else {
        return { validEmail: true };
      }
    };
  }

}
