import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './components/landing/landing.component';
import { PanditListComponent } from './components/pandit-list/pandit-list.component';
import { AboutComponent } from './components/about/about.component';
import { ClientSignupComponent } from './components/client-signup/client-signup.component';
import { PanditRegistrationComponent } from './components/pandit-registration/pandit-registration.component';
import { ClientLoginComponent } from './components/client-login/client-login.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'landing' },
  { path: 'landing', component: LandingComponent },
  { path: 'client_signup', component: ClientSignupComponent },
  { path: 'pandit_registration', component: PanditRegistrationComponent },
  { path: 'pandits', component: PanditListComponent },
  { path: 'about', component: AboutComponent },
  {path:'client_login', component:ClientLoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
