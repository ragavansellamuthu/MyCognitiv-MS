import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';

import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';

import { AppComponent } from './app.component';
import { CandidateFormComponent } from './components/candidate/candidate-form/candidate-form.component';
import { CandidatePageComponent } from './components/candidate/candidate-page/candidate-page.component';
import { CandidateDetailsComponent } from './components/candidate/candidate-details/candidate-details.component';
import { ChapterComponent } from './components/chapter/chapter.component';




@NgModule({
  declarations: [

    // Layout : 
    AppComponent,

    // Candidate : 
    CandidateFormComponent,
    CandidatePageComponent,
    CandidateDetailsComponent,
    ChapterComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    BrowserAnimationsModule,

    RouterModule.forRoot([]),
    
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatMenuModule,
    MatSidenavModule,
    MatListModule
    

  ],
  providers: [
    {provide: APP_BASE_HREF, useValue: '/mycognitiv'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
