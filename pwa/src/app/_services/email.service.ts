import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class EmailService {

  constructor(private httpClient: HttpClient) { }

  sendEmail(input: any) {
    return this.httpClient.post(environment.api.email.url, input, {responseType: 'text'}).pipe(
      map(
        (response) => {
          return response
        }
      )
    )
  }

}
