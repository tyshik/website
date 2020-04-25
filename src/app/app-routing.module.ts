import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuestionBlockComponent } from './question-block/question-block.component';


const routes: Routes = [
  // { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dogs', component: QuestionBlockComponent },
  // { path: 'detail/:id', component: HeroDetailComponent },
  // { path: 'heroes', component: HeroesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
