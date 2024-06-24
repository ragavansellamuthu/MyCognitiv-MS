import { Component } from '@angular/core';
import { LoadingService } from './service/loading/loading.service';
import { MatDialog } from '@angular/material/dialog';
import { NotificationComponent } from './component/common/notification/notification.component';
import { NotificationService } from './service/notification/notification.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mycognitiv';

  notificationCount !: number  ; // Testing purpose
  isLoading !: boolean ;
  selectedItem : string = 'dashboard';

  constructor (
    private loadingService : LoadingService,
    private dialog : MatDialog,
    private notificationService : NotificationService
  ) {

    this.loadingService.loading$.subscribe(
      loading => {
      this.isLoading = loading;
    });

    this.notificationService.notificationCount$.subscribe(
      count => {
        this.notificationCount = count;
      }
    )
  }

  exit(){
    debugger
    sessionStorage.clear();
    this.notificationService.setNotificationCount(5); // Testing purpose
  }

  onItemSelected( item : string ){
    debugger
    this.selectedItem = item ;
  }

  showNotification(){
    debugger
    this.dialog.open(NotificationComponent,{
      disableClose:true,
      width:'600px'
    });
  }

}
