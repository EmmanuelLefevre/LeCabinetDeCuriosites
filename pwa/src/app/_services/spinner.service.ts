import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class SpinnerService {

  public visibility = new BehaviorSubject<boolean>(false);

  constructor() {}

  show() {
    this.visibility.next(true);
  }

  hide() {
    this.visibility.next(false);
  }

}
