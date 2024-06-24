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
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatBadgeModule } from '@angular/material/badge';
import { MatDividerModule } from '@angular/material/divider';
import {MatExpansionModule} from '@angular/material/expansion';

import { AppComponent } from './app.component';


import { CandidatePageComponent } from './component/candidate/candidate-page/candidate-page.component';
import { CandidateFormComponent } from './component/candidate/candidate-form/candidate-form.component';
import { CandidateDetailsComponent } from './component/candidate/candidate-details/candidate-details.component';
import { DeleteComponent } from './component/common/delete/delete.component';
import { TableCustomizationComponent } from './component/common/table-customization/table-customization.component';
import { FormsModule } from '@angular/forms';
import { TitleCasePipe } from './pipe/title-case/title-case.pipe';
import { HighlightDirective } from './directive/highlight/highlight.directive';
import { BatchDetailsComponent } from './component/batch/batch-details/batch-details.component';
import { BatchFormComponent } from './component/batch/batch-form/batch-form.component';
import { BatchPageComponent } from './component/batch/batch-page/batch-page.component';
import { ProfessorPageComponent } from './component/professor/professor-page/professor-page.component';
import { ProfessorDetailsComponent } from './component/professor/professor-details/professor-details.component';
import { ProfessorFormComponent } from './component/professor/professor-form/professor-form.component';
import { DashboardComponent } from './component/common/dashboard/dashboard.component';
import { ChapterFormComponent } from './component/chapter/chapter-form/chapter-form.component';
import { ChapterDetailsComponent } from './component/chapter/chapter-details/chapter-details.component';
import { ChapterPageComponent } from './component/chapter/chapter-page/chapter-page.component';
import { SubjectDetailsComponent } from './component/subject/subject-details/subject-details.component';
import { SubjectFormComponent } from './component/subject/subject-form/subject-form.component';
import { SubjectPageComponent } from './component/subject/subject-page/subject-page.component';
import { TopicDetailsComponent } from './component/topic/topic-details/topic-details.component';
import { TopicFormComponent } from './component/topic/topic-form/topic-form.component';
import { TopicPageComponent } from './component/topic/topic-page/topic-page.component';
import { NotificationComponent } from './component/common/notification/notification.component';



@NgModule({
  declarations: [

    // Layout : 
    AppComponent,

    // Directice :
    HighlightDirective,

    // Pipe : 
    TitleCasePipe,

    // Common :
    DeleteComponent,
    TableCustomizationComponent,
    DashboardComponent,
    NotificationComponent,

    // Candidate :
    CandidatePageComponent,
    CandidateFormComponent,
    CandidateDetailsComponent,
    
    // Batch :  
    BatchDetailsComponent,
    BatchFormComponent,
    BatchPageComponent,

    // Professor :
    ProfessorPageComponent,
    ProfessorDetailsComponent,
    ProfessorFormComponent,

    // Chapter : 
    ChapterFormComponent,
    ChapterDetailsComponent,
    ChapterPageComponent,

    // Subject : 
    SubjectDetailsComponent,
    SubjectFormComponent,
    SubjectPageComponent,

    // Topic : 
    TopicDetailsComponent,
    TopicFormComponent,
    TopicPageComponent

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
    MatSortModule,
    MatSnackBarModule,
    MatBadgeModule,
    MatDividerModule,
    MatExpansionModule
    
  ],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/mycognitiv' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
