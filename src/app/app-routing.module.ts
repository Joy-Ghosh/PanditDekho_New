import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './components/landing/landing.component';
import { PanditListComponent } from './components/pandit-list/pandit-list.component';
import { AboutComponent } from './components/about/about.component';
import { ClientSignupComponent } from './components/client-signup/client-signup.component';
import { PanditRegistrationComponent } from './components/pandit-registration/pandit-registration.component';
import { ClientLoginComponent } from './components/client-login/client-login.component';
import { ServiceComponent } from './components/service/service.component';
import { AllPujaRequestComponent } from './components/all-puja-request/all-puja-request.component';
import { ChatComponent } from './components/chat/chat.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'landing' },
  { path: 'landing', component: LandingComponent },
  { path: 'client_signup', component: ClientSignupComponent },
  { path: 'pandit_registration', component: PanditRegistrationComponent },
  { path: 'pandits', component: PanditListComponent },
  { path: 'about', component: AboutComponent },
  { path: 'client_login', component: ClientLoginComponent },
  { path:'service', component: ServiceComponent},
  {path:'puja_requests', component:AllPujaRequestComponent},
  {path:'chats', component:ChatComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
