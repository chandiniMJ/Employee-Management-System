import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { EMSComponent } from './ems/ems.component';
import { RegistrationComponent } from './registration/registration.component';
import { SignInComponent } from './sign-in/sign-in.component';


const routes: Routes = [
  {path:"", redirectTo:"register",pathMatch:"full"},
  {path:"register", component:RegistrationComponent},
  {path:"signin", component:SignInComponent},
  {path:"add",component:AddComponent},
  {path:"edit",component:EditComponent},
  {path:"ems", component:EMSComponent},
  {path:"**", component:RegistrationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
