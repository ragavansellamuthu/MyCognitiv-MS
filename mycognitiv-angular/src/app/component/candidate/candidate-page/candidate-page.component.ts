import { Component, OnInit } from '@angular/core';
import { Candidate } from 'src/app/model/candidate/candidate';
import { Page } from 'src/app/model/page/page';
import { CandidateService } from 'src/app/service/candidate/candidate.service';
import { TableCustomizationComponent } from '../../common/table-customization/table-customization.component';
import { MatDialog } from '@angular/material/dialog';
import { DeleteComponent } from '../../common/delete/delete.component';

@Component({
  selector: 'app-candidate-page',
  templateUrl: './candidate-page.component.html',
  styleUrls: ['./candidate-page.component.css']
})
export class CandidatePageComponent implements OnInit{

  page !: Page ;
  dataSource !: Candidate[];
  allColumns !: string[] ;
  selectedColumns !: string[] ;
  loading !: boolean ;

  constructor(
    private candidateService : CandidateService,
    private dialog : MatDialog
  ) {
    this.page = new Page();
    console.log(this.page);
  }

  ngOnInit(): void {
    this.getColumns();
    this.getCandidates();
  }

  getColumns() {
    this.allColumns = ['position','name','email','age','mobileNumber','details','edit','delete'];
    this.selectedColumns = this.allColumns;
  }

  getCandidates() {
    debugger
    this.candidateService.paginateCandidates(this.page).subscribe({
      next : (response) => {
        debugger
        if (response) {
          console.log(response);
          this.dataSource = response.content;
          this.page.totalCount = response.page.totalElements;
          this.page.totalPages = response.page.totalPages;
        }
      }
    });
  }

  paginateCandidates(event:any) {
    debugger
    this.page.pageIndex = event.pageIndex;
    this.page.pageSize = event.pageSize;
    this.getCandidates();
  }

  sortCandidates(event : any) {
    debugger
  }

  searchCandidates(event:any){
    debugger
  }

  
  customizeTable() {
    debugger
    let dialogRef = this.dialog.open(TableCustomizationComponent,{disableClose:true,width:'400px', height:'250px',data:{allColumns:this.allColumns,selectedColumns:this.selectedColumns}});
    dialogRef.afterClosed().subscribe(
      selectedColumns => {
        if(selectedColumns){
          debugger
          this.selectedColumns = selectedColumns;
        }
      }
    )
  }

  createCandidate() {
    debugger
  }

  viewCandidate(candidateId : number) {
    debugger
  }

  editCandidate(candidateId : number) {
    debugger
  }

  deleteCandidate(candidateId : number,candidateName : string) {
    debugger
    let dialogRef = this.dialog.open(DeleteComponent,
      { 
        disableClose : true,
        height : '200px',
        data : {
                 itemType : 'Candidate',
                 itemName : candidateName
                }
      });
    dialogRef.afterClosed().subscribe(
      result => {
        
      }
    )
  }

}
