import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getUserId() {
    debugger
    return sessionStorage.getItem('USER_ID');
  }

  setUserId(userId : any) {
    debugger
    sessionStorage.setItem('USER_ID',userId);
  }

  getCandidateColumns() {
    debugger
    return localStorage.getItem('COLUMNS_CANDIDATE');
  }

  setCandidateColumns(candidateColumns : any) {
    debugger
    return localStorage.setItem('COLUMNS_CANDIDATE',JSON.stringify(candidateColumns));
  }

  

}
