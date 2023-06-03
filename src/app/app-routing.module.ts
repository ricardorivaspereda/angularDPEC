import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormLoginComponent } from './component/form-login/form-login.component';
import { HomeOperarioComponent } from './component/home-operario/home-operario.component';
import { HomeComponent } from './component/home/home.component';

const routes: Routes = [
  {path:'home', component: HomeOperarioComponent},
  {path:'login', component: FormLoginComponent},
  {path:'', component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
