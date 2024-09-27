import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WorkDoneComponent } from './work-done/work-done.component';

export const routes: Routes = [
  { path: '', component: WorkDoneComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
