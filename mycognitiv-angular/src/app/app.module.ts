import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { APP_BASE_HREF } from '@angular/common';

import { HttpClientModule } from '@angular/common/http';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatCardModule } from '@angular/material/card';
import { MatSortModule } from '@angular/material/sort';

import { AppComponent } from './app.component';

import { HighlightDirective } from './directive/highlight.directive';

import { CandidatePageComponent } from './component/candidate/candidate-page/candidate-page.component';
import { CandidateFormComponent } from './component/candidate/candidate-form/candidate-form.component';
import { CandidateDetailsComponent } from './component/candidate/candidate-details/candidate-details.component';
import { DeleteComponent } from './component/common/delete/delete.component';
import { TableCustomizationComponent } from './component/common/table-customization/table-customization.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [

    // Layout : 
    AppComponent,

    // Directice :
    HighlightDirective,

    // Candidate :
    CandidatePageComponent,
    CandidateFormComponent,
    CandidateDetailsComponent,
    
    // Common :
    DeleteComponent,
    TableCustomizationComponent,

  ],
  imports: [

    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([]),

    FormsModule,
    HttpClientModule,

    // Angular Material :

    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatMenuModule,
    MatSidenavModule,
    MatListModule,
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule,
    MatTableModule,
    MatPaginatorModule,
    MatDialogModule,
    MatProgressBarModule,
    MatCardModule,
    MatSortModule
    

  ],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/mycognitiv' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
