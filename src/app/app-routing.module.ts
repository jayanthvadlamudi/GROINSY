import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LOGINFORMComponent } from './loginform/loginform.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [

  {
    path:"" ,
  component:LOGINFORMComponent
  },

  {
    path:'login',
    component:LOGINFORMComponent
  },

  {
    path:'',
    redirectTo:'login',
    pathMatch:'full'
  },


  {
    path:"Dashboard",
  component:DashboardComponent
  }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
