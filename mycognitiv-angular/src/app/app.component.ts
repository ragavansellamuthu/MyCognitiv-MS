import { Component } from '@angular/core';
import { LoadingService } from './service/loading/loading.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mycognitiv';

  noficationCount : number = 11 ; // Testing purpose
  isLoading !: boolean ;

  constructor (
    private loadingService : LoadingService
  ) {
    this.loadingService.loading$.subscribe(
      loading => {
      this.isLoading = loading;
    });
  }

  exit(){
    debugger
    sessionStorage.clear();
  }

  showNotification(){
    debugger
    this.isLoading = !this.isLoading; // Testing purpose
  }

}
