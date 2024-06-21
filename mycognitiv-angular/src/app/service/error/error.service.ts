import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  constructor() { }

  handleError(error:HttpErrorResponse){
    console.error("Error occurred : " + error.message);
    return throwError(()=>{
      new Error("Server Error");
    });
  }

}
