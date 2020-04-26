import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuestionBlockComponent } from './question-block/question-block.component';
import { CenterColumnComponent } from './center-column/center-column.component';


const routes: Routes = [
  { path: '', component: CenterColumnComponent },
  { path: 'messages', component: QuestionBlockComponent },
  { path: '**', redirectTo: '/' }, // TODO: create NotFoundComponent
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
