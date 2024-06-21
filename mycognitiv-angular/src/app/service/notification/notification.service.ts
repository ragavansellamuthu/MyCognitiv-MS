import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(
    private snackBar : MatSnackBar
  ) { }

  notify(message:string,action:string){
    let config = new MatSnackBarConfig();
    config.duration=3000;
    config.horizontalPosition='center';
    config.verticalPosition='top';
    config.panelClass = ['custom-snackbar'];
    return this.snackBar.open(message,action,config);
  }

}
