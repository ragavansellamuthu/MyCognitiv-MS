import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environment/environment';

const API_URL : string = environment.API_URL + 'candidate';

@Injectable({
  providedIn: 'root'
})
export class CandidateService {

  constructor(private httpClient:HttpClient,private httpParam : HttpParams) { }

  isDuplicateCandidate(email : string) {
    //let param = HttpP
    return this.httpClient.get(API_URL);
  }


}
