import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CandidatePageComponent } from './component/candidate/candidate-page/candidate-page.component';

const routes: Routes = [
  {path:'candidates',component:CandidatePageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
