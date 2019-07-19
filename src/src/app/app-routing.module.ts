import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ApplyComponent } from './components/apply/apply.component';


const routes: Routes = [
  {path: 'micro-loans', component: HomeComponent},
  {path: 'apply', component: ApplyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
