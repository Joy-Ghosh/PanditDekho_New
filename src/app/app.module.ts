import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './components/landing/landing.component';
import { PanditListComponent } from './components/pandit-list/pandit-list.component';
import { AboutComponent } from './components/about/about.component';
import { ClientSignupComponent } from './components/client-signup/client-signup.component';
import { PanditRegistrationComponent } from './components/pandit-registration/pandit-registration.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ClientLoginComponent } from './components/client-login/client-login.component';
import { ServiceComponent } from './components/service/service.component';
import { AllPujaRequestComponent } from './components/all-puja-request/all-puja-request.component';
import { NewHeaderComponent } from './components/new-header/new-header.component';
import { ChatComponent } from './components/chat/chat.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    PanditListComponent,
    AboutComponent,
    ClientSignupComponent,
    PanditRegistrationComponent,
    HeaderComponent,
    FooterComponent,
    ClientLoginComponent,
    ServiceComponent,
    AllPujaRequestComponent,
    NewHeaderComponent,
    ChatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
