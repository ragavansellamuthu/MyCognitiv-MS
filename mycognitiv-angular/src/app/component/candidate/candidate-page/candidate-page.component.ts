import { Component, OnInit } from '@angular/core';
import { Candidate } from 'src/app/model/candidate/candidate';
import { Page } from 'src/app/model/page/page';
import { CandidateService } from 'src/app/service/candidate/candidate.service';
import { TableCustomizationComponent } from '../../common/table-customization/table-customization.component';
import { MatDialog } from '@angular/material/dialog';
import { DeleteComponent } from '../../common/delete/delete.component';
import { NotificationService } from 'src/app/service/notification/notification.service';
import { DataService } from 'src/app/service/data/data.service';
import { CandidateDetailsComponent } from '../candidate-details/candidate-details.component';
import { LoadingService } from 'src/app/service/loading/loading.service';

@Component({
  selector: 'app-candidate-page',
  templateUrl: './candidate-page.component.html',
  styleUrls: ['./candidate-page.component.css']
})
export class CandidatePageComponent implements OnInit {

  page !: Page;
  dataSource !: Candidate[];
  allColumns !: string[];
  selectedColumns !: string[];
  loading !: boolean;

  constructor(
    private candidateService: CandidateService,
    private dialog: MatDialog,
    private notificationService: NotificationService,
    private dataService : DataService,
    private loadingService : LoadingService
  ) {
    this.page = new Page();
  }

  ngOnInit(): void {
    this.loadingService.start();
    this.getColumns();
    this.getCandidates();
  }

  getColumns() {
    this.allColumns = ['position', 'name', 'email', 'age', 'mobileNumber', 'details', 'edit', 'delete'];
    const storedColumns = this.dataService.getCandidateColumns();
    this.selectedColumns = storedColumns ? JSON.parse(storedColumns) :  this.allColumns;
  }

  getCandidates() {
    debugger
    this.candidateService.paginateCandidates(this.page).subscribe({
      next: (response) => {
        debugger
        if (response) {
          this.dataSource = response.content;
          this.page.totalCount = response.page.totalElements;
          this.page.totalPages = response.page.totalPages;
          this.loadingService.stop();
        }
      }, 
      error : (err) => {
        this.loadingService.stop();
        console.error(err);
        this.notificationService.notify('Error Occurred' , 'OK');
      }
    });
  }

  paginateCandidates(event: any) {
    debugger
    this.page.pageIndex = event.pageIndex;
    this.page.pageSize = event.pageSize;
    this.getCandidates();
  }

  sortCandidates(event: any) {
    debugger
    if (this.page.sortOrder!= event.direction || this.page.attributeName!=event.active) {
      this.page.pageIndex = 0;
    }
    this.page.sortOrder = event.direction;
    this.page.attributeName = event.active;
    this.getCandidates();
  }

  searchCandidates(event: any) {
    const searchText: string = event.target.value.trim();
    if (this.page.searchText !== searchText || searchText === '') {
      this.page.searchText = searchText;
      this.page.pageIndex = 0;
      this.getCandidates();
    }
  }


  customizeTable() {
    debugger
    let dialogRef = this.dialog.open(TableCustomizationComponent, { disableClose: true, width: '400px', height: '250px', data: { allColumns: this.allColumns, selectedColumns: this.selectedColumns, tableName:'Candidate' } });
    dialogRef.afterClosed().subscribe(
      selectedColumns => {
        if (selectedColumns) {
          debugger
          this.selectedColumns = selectedColumns;
          this.dataService.setCandidateColumns(selectedColumns);
        }
      }
    )
  }

  createCandidate() {
    debugger
  }

  viewCandidate(candidateId: number) {
    debugger
    this.dialog.open(CandidateDetailsComponent,
      {
        disableClose : true,
        data : {
          candidateId : candidateId
        }
      }
    );
  }

  editCandidate(candidateId: number) {
    debugger
  }

  deleteCandidate(candidateId: number, candidateName: string) {
    debugger
    let dialogRef = this.dialog.open(DeleteComponent,
      {
        disableClose: true,
        height: '200px',
        data: {
          itemType: 'Candidate',
          itemName: candidateName
        }
      });
    dialogRef.afterClosed().subscribe(
      result => {
        if (result == 'CONFIRM') {
          this.candidateService.deleteCandidate(candidateId).subscribe({
            next: (response) => {
              debugger
              if (response) {
                let message = candidateName + " has been deleted successfully";
                if (this.dataSource.length == 1 && this.page.pageIndex > 0) {
                  this.page.pageIndex = this.page.pageIndex - 1;
                }
                this.getCandidates();
                let snackBarRef = this.notificationService.notify(message,'UNDO');
                snackBarRef.onAction().subscribe(() => {
                  this.candidateService.undoDeletion(candidateId).subscribe({
                    next : (res) => {
                      if(res){
                        message = candidateName + " has been retrieved successfully";
                        this.notificationService.notify(message,'OK');
                        this.getCandidates();
                      }
                    }
                  });
                });
              } else {
                const message = 'Failed to delete ' + candidateName + "'s account";
                this.notificationService.notify(message,'OK');
              }
            },
            error: (err) => {
              console.error(err);
              this.notificationService.notify('Error occurred','OK');
            }
          });
        } 
      }   
    );
}

}
