import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getUserId() {
    debugger
    return sessionStorage.getItem('USER_ID') || 0;
  }

}
