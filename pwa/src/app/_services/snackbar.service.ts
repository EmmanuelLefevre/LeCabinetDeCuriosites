import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackbarComponent } from '../components/snackbar/snackbar.component';


@Injectable({
  providedIn: 'root'
})

export class SnackbarService {

  constructor(private snackbar: MatSnackBar) { }

  showNotification(displayMessage: string) {
    this.snackbar.openFromComponent(SnackbarComponent, {
      data: {
        message: displayMessage
      },
      duration: 3000,
      verticalPosition: 'bottom',
      horizontalPosition: 'start'
    });
  }

}
