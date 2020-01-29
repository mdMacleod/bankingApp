import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpService } from './http.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CheckingComponent } from './dashboard/checking/checking.component';
import { SavingsComponent } from './dashboard/savings/savings.component';
import { CreditComponent } from './dashboard/credit/credit.component';
import { LoansComponent } from './dashboard/loans/loans.component';
import { OneCheckingComponent } from './dashboard/checking/one-checking/one-checking.component';
import { OneCreditComponent } from './dashboard/credit/one-credit/one-credit.component';
import { OneLoanComponent } from './dashboard/loans/one-loan/one-loan.component';
import { OneSavingsComponent } from './dashboard/savings/one-savings/one-savings.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { HomeComponent } from './dashboard/home/home.component';
import { RegistrationComponent } from './registration/registration.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    CheckingComponent,
    SavingsComponent,
    CreditComponent,
    LoansComponent,
    OneCheckingComponent,
    OneCreditComponent,
    OneLoanComponent,
    OneSavingsComponent,
    FileUploadComponent,
    HomeComponent,
    RegistrationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
