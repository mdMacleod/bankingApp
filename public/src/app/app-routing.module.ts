import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CheckingComponent } from './dashboard/checking/checking.component';
import { OneCheckingComponent } from './dashboard/checking/one-checking/one-checking.component';
import { SavingsComponent } from './dashboard/savings/savings.component';
import { OneSavingsComponent } from './dashboard/savings/one-savings/one-savings.component';
import { LoansComponent } from './dashboard/loans/loans.component';
import { OneLoanComponent } from './dashboard/loans/one-loan/one-loan.component';
import { CreditComponent } from './dashboard/credit/credit.component';
import { OneCreditComponent } from './dashboard/credit/one-credit/one-credit.component';
import { HomeComponent } from './dashboard/home/home.component';
import { RegistrationComponent } from './registration/registration.component';


const routes: Routes = [

  { path: 'login', component: LoginComponent },
  { path: 'registration', component: RegistrationComponent },

  { path: 'dashboard', component: DashboardComponent, children: [
    {path: 'home', component: HomeComponent},
    {path: 'checking', component: CheckingComponent, children: [
      {path: 'id', component: OneCheckingComponent}
    ]},

    { path: 'savings', component: SavingsComponent, children: [
      { path: ':id', component: OneSavingsComponent}
    ]},

    {path: 'loans', component: LoansComponent, children: [
      {path: ':id', component: OneLoanComponent}
    ]},
    
    { path: 'credit', component: CreditComponent, children: [
      {path: ':id', component: OneCreditComponent}
    ]},

  ]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
