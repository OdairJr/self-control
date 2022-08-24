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
import { firebaseEnvironment } from './config/firebase.conf';

import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { BillsModule } from './bills/bills.module';
// import { cartReducer, counterReducer } from './reducers/cart.reducer';

registerLocaleData(localePt);

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
    VerifyEmailComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    AngularFireModule.initializeApp(firebaseEnvironment.firebase, 'self-control'),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    StoreModule.forRoot({
      // cart: cartReducer,
    }),
    StoreDevtoolsModule.instrument({
      name: 'NgRx Demo App',
      logOnly: environment.production
    }),
    BillsModule
  ],
  providers: [
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
