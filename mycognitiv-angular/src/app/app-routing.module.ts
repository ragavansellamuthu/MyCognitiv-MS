import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CandidatePageComponent } from './component/candidate/candidate-page/candidate-page.component';
import { DashboardComponent } from './component/common/dashboard/dashboard.component';
import { ProfessorPageComponent } from './component/professor/professor-page/professor-page.component';
import { SubjectPageComponent } from './component/subject/subject-page/subject-page.component';
import { ChapterPageComponent } from './component/chapter/chapter-page/chapter-page.component';
import { BatchPageComponent } from './component/batch/batch-page/batch-page.component';
import { TopicPageComponent } from './component/topic/topic-page/topic-page.component';

const routes: Routes = [
  {path:'dashboard',component:DashboardComponent},
  {path:'candidates',component:CandidatePageComponent},
  {path:'professors',component:ProfessorPageComponent},
  {path:'subjects',component:SubjectPageComponent},
  {path:'chapters',component:ChapterPageComponent},
  {path:'topics',component:TopicPageComponent},
  {path:'batches',component:BatchPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
