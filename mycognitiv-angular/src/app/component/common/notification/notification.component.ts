import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Notification } from 'src/app/model/notification/notification';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {

  notifications !: Notification[];
  notificationIds : number[]=[];

  constructor(private dialogRef: MatDialogRef<NotificationComponent>) {
  }

  ngOnInit(): void {
    debugger
    this.getNotifications();
  }

  getNotifications() {   // Testing purpose
    this.notifications = [
      {
        notificationId: 1,
        title: 'Test Assigned',
        message:"Dear Candidate, Mr.XYZ Professor has assigned a 'Physics' test to you. You have to attend the test within tomorrow. Thank you",
        time: new Date(1)
      },{
        notificationId: 2,
        title: 'Result Published',
        message: "Dear Raghavan, You have been failed in the physics test.You can rewrite the test now. Thank you",
        time: new Date(3)
      },{
        notificationId: 3,
        title: 'Fees Balance',
        message: 'Dear Candidate, You have fees due. Please pay the fees before sunday. Thank you',
        time: new Date(5)
      },
      {
        notificationId: 4,
        title: 'Test Assigned',
        message:"Dear Candidate, Mr.XYZ Professor has assigned a 'Physics' test to you. You have to attend the test within tomorrow. Thank you",
        time: new Date(1)
      },{
        notificationId: 5,
        title: 'Result Published',
        message: "Dear Raghavan, You have been failed in the physics test.You can rewrite the test now. Thank you",
        time: new Date(3)
      },{
        notificationId: 6,
        title: 'Fees Balance',
        message: 'Dear Candidate, You have fees due. Please pay the fees before sunday. Thank you',
        time: new Date(5)
      },
      {
        notificationId: 7,
        title: 'Test Assigned',
        message:"Dear Candidate, Mr.XYZ Professor has assigned a 'Physics' test to you. You have to attend the test within tomorrow. Thank you",
        time: new Date(1)
      },{
        notificationId: 8,
        title: 'Result Published',
        message: "Dear Raghavan, You have been failed in the physics test.You can rewrite the test now. Thank you",
        time: new Date(3)
      },{
        notificationId: 9,
        title: 'Fees Balance',
        message: 'Dear Candidate, You have fees due. Please pay the fees before sunday. Thank you',
        time: new Date(5)
      }
    ];
  }

  markAsRead(notificationId:number){
    console.log(notificationId);
    this.notificationIds.push(notificationId);
  }

  close() {
    this.dialogRef.close();
    if(this.notificationIds.length>0){
      const uniqueNotificationIds = Array.from(new Set(this.notificationIds));
      console.log(uniqueNotificationIds);
    }
  }

}
