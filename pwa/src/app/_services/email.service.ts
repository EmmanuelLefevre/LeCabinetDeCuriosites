import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs';

import { IEmail } from '../public/home/components/email-form/iEmail';


@Injectable({
  providedIn: 'root'
})

export class EmailService {

  constructor(private httpClient: HttpClient) { }

  sendEmail(email: IEmail) {
    return this.httpClient.post(environment.api.email.url, email, {responseType: 'text'}).pipe(
      map(
        (response) => {
          return response;
        }
      )
    )
  }

}
