import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { HomeContainerComponent } from './components/home/home.container';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AddBillComponent } from './components/home/add-bill/add-bill.component';
import { FormsModule } from '@angular/forms';
import { BillTableComponent } from './components/home/bill-table/bill-table.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AuthService } from './shared/services/auth.service';

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyBFqa6kwsiyGyQ6_EkmEIGrjB6HX7mH28A",
    authDomain: "self-control-25442.firebaseapp.com",
    databaseURL: "https://self-control-25442-default-rtdb.firebaseio.com/",
    projectId: "self-control-25442",
    storageBucket: "self-control-25442.appspot.com",
    messagingSenderId: "1028647689871",
    appId: "1:1028647689871:web:3184d9b0abef2659d3dafa",
    measurementId: "G-XH8XJ35BTX"
  }
};

@NgModule({
  declarations: [
    AppComponent,
    HomeContainerComponent,
    AddBillComponent,
    BillTableComponent,
    DashboardComponent,
    SignInComponent,
    SignUpComponent,
    ForgotPasswordComponent,
    VerifyEmailComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    AngularFireModule.initializeApp(environment.firebase, 'self-control'),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,
  ],
  providers: [
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
