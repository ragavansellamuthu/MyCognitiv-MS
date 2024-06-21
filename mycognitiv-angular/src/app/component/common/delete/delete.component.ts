import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent {
  
  result : string  = 'CONFIRM' ;

  constructor (

    public dialogRef: MatDialogRef<DeleteComponent>,

    @Inject(MAT_DIALOG_DATA) 
    public data: any
    
  ) {}

}
