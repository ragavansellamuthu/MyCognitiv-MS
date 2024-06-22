import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DeleteComponent } from '../../common/delete/delete.component';
import { Candidate } from 'src/app/model/candidate/candidate';
import { CandidateService } from 'src/app/service/candidate/candidate.service';
import { NotificationService } from 'src/app/service/notification/notification.service';

@Component({
  selector: 'app-candidate-details',
  templateUrl: './candidate-details.component.html',
  styleUrls: ['./candidate-details.component.css']
})
export class CandidateDetailsComponent implements OnInit {

  candidate !: Candidate ;

  constructor (

    public dialogRef: MatDialogRef<DeleteComponent>,

    @Inject(MAT_DIALOG_DATA) 
    public data: any,

    private candidateService : CandidateService,
    private notificationService : NotificationService 
    
  ) {
    this.candidate = new Candidate() ;
  }

  ngOnInit(): void {
    this.candidateService.viewCandidate(this.data.candidateId).subscribe({
      next : (candidate) => {
        if(candidate){
          this.candidate = candidate ;
        }
      },
      error : (err) => {
        console.error(err);
        this.notificationService.notify('Please try again later','OK');
      }
    });
  }

  download() {
    debugger
  }
  
}
