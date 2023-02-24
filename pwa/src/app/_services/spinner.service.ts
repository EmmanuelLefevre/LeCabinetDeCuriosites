import { Injectable } from '@angular/core';
import { BehaviorSubject, delay } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class SpinnerService {

  public visibility = new BehaviorSubject<boolean>(false);

  constructor() {}

  show() {
    this.visibility.next(true);
    delay(1200);
  }

  hide() {
    this.visibility.next(false);
  }

}
