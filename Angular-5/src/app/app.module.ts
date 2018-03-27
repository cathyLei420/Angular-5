import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AngularFireModule} from 'angularfire2';
import {FormsModule} from '@angular/forms';

import { ServiceWorkerModule } from '@angular/service-worker';
import { AppComponent } from './app.component';

import { environment } from '../environments/environment';
import { AngularFireDatabase } from 'angularfire2/database';
import { LoginComponent } from './auth/login/login.component';
import { HomeComponent } from './auth/home/home.component';
import { RouterModule } from '@angular/router';
import { NavigationComponent } from './auth/navigation/navigation.component';
import { RegistrationComponent } from './auth/registration/registration.component';
import { AuthService } from './auth/auth.service';
import { AngularFireAuth} from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    NavigationComponent,
    RegistrationComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: 'home', component: HomeComponent},
      {path: 'login', component: LoginComponent},
      {path: 'registration', component: RegistrationComponent},
    ]),
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [AngularFireDatabase, AuthService,AngularFireAuth],
  bootstrap: [AppComponent]
})
export class AppModule { }
