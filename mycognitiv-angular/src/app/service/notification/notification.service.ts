import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  private notificationCountSubject !: BehaviorSubject<number>; ;

  public notificationCount$ !: Observable<number> ;

  constructor(
    private snackBar : MatSnackBar
  ) {
   this.notificationCountSubject = new BehaviorSubject<number>(this.getNotificationCount());
   this.notificationCount$ = this.notificationCountSubject.asObservable();
   }

  setNotificationCount(count : number) {
    this.notificationCountSubject.next(count);
  }

  getNotificationCount() : number {
    // Have to get this from backend
    return 3 ;
  }

  notify(message:string,action:string){
    let config = new MatSnackBarConfig();
    config.duration=3000;
    config.horizontalPosition='center';
    config.verticalPosition='top';
    config.panelClass = ['custom-snackbar'];
    return this.snackBar.open(message,action,config);
  }

}
