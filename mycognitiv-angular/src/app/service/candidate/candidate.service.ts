import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environment/environment';
import { Candidate } from '../../model/candidate/candidate';
import { Observable, catchError } from 'rxjs';
import { ErrorService } from '../error/error.service';
import { DataService } from '../data/data.service';
import { Page } from 'src/app/model/page/page';

const GATEWAY_URL : string = environment.GATEWAY_URL + 'candidate';
const CANDIDATE_SERVICE_URL : string = 'http://localhost:8081/mycognitiv/candidate-service/candidate'

@Injectable({
  providedIn: 'root'
})
export class CandidateService {

  private readonly API_URL !: string ;

  constructor(
    private httpClient:HttpClient,
    private errorService : ErrorService,
    private dataService : DataService) { 
    this.API_URL = CANDIDATE_SERVICE_URL;
  }

  createCandidate(candidate : Candidate) : Observable<any> {
    debugger
    return this.httpClient
               .post(`${this.API_URL}`,candidate)
               .pipe(
                catchError(this.errorService.handleError)
               );
  }

  viewCandidate(candidateId : number) : Observable<any> {
    debugger
    return this.httpClient
               .get(`${this.API_URL}/${candidateId}`)
               .pipe(
                catchError(this.errorService.handleError)
               );
  }

  updateCandidate(candidate : Candidate) : Observable<any> {
    debugger
    return this.httpClient
               .put(`${this.API_URL}`,candidate)
               .pipe(
                catchError(this.errorService.handleError)
               );
  }

  deleteCandidate( candidateId : number ) : Observable<any> {
    debugger
    sessionStorage.setItem('USER_ID','1'); // Testing purpose
    const userId = this.dataService.getUserId();
    return this.httpClient
               .delete(`${this.API_URL}/${candidateId}/${userId}`)
               .pipe(
                catchError(this.errorService.handleError)
               );
  }

  getAllCandidates() : Observable<any> {
    debugger
    return this.httpClient
               .get(`${this.API_URL}/list`)
               .pipe(
                catchError(this.errorService.handleError)
               );
  }

  paginateCandidates(page : Page) : Observable<any> {
    debugger
    
    let params = new HttpParams()
      .set('pageIndex', page.pageIndex.toString())
      .set('pageSize', page.pageSize.toString())
      .set('attributeName', page.attributeName)
      .set('sortOrder', page.sortOrder)
      .set('searchText', page.searchText);

    return this.httpClient
               .get(`${this.API_URL}/page`,{params : params})
               .pipe(
                catchError(this.errorService.handleError)
               );
  }

  isDuplicateCandidate(email : string) : Observable<any> {
    debugger
    return this.httpClient
               .get(`${this.API_URL}/${email}`)
               .pipe(
                catchError(this.errorService.handleError)
              );
  }


}
