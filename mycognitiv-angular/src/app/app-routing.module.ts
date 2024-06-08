import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CandidatePageComponent } from './components/candidate/candidate-page/candidate-page.component';
import { ChapterPageComponent } from './components/chapter/chapter-page/chapter-page.component';

const routes: Routes = [
  {path:'candidates',component:CandidatePageComponent},
  {path:'chapters',component:ChapterPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
