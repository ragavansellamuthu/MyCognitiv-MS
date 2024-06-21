import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-table-customization',
  templateUrl: './table-customization.component.html',
  styleUrls: ['./table-customization.component.css']
})
export class TableCustomizationComponent {

  allColumns : string[] = [];
  selectedColumns : string[] =[] ;

  constructor (

    public dialogRef: MatDialogRef<TableCustomizationComponent>,
    @Inject(MAT_DIALOG_DATA) 
    public data: any
    
  ) {}

  ngOnInit(){
    this.allColumns = this.data.allColumns;
    this.selectedColumns = this.data.selectedColumns;
  }
  
}
