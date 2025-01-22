import { Routes } from '@angular/router';
import { provideRouter, RouterModule } from '@angular/router';
import { HeaderComponent } from './Heropage/header.component';
import { LoginComponent } from './login/login.component';
import { CarwashComponent } from './carwash/carwash.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { SigninComponent } from './signin/signin.component';
import { SellacarComponent } from './sellacar/sellacar.component';
import { VerifyComponent } from './verify/verify.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RegisterComponent } from './register/register.component';

export const routes: Routes = [
  { path: '', redirectTo: 'header', pathMatch: 'full' },
  { path: 'header', component: HeaderComponent },
  { path: 'login', component: LoginComponent },
  { path: 'carwash', component: CarwashComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'forgetpassword', component: ForgetpasswordComponent },
  { path: 'sellacar', component: SellacarComponent },
  { path: 'verify', component: VerifyComponent },
  { path: 'signin', component: SigninComponent },
  {path:'navbar', component: NavbarComponent},
  {path:'register', component: RegisterComponent},
  { path: '**', redirectTo: 'header' },
];

export const appRoutingProviders = [provideRouter(routes)];
