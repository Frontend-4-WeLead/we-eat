import { Routes } from '@angular/router';
import { LoginSignupPageComponent } from './pages/login-signup-page/login-signup-page.component';
import { LoginPageComponent } from './pages/login-signup-page/login-page/login-page.component';
import { SingUpPageComponent } from './pages/login-signup-page/sign-up-page/sing-up-page.component';

export const routes: Routes = [
    { path: 'login', component: LoginSignupPageComponent },
    // { path: 'login-page', component: LoginPageComponent },
    // { path: 'signup', component: SingUpPageComponent },
    // { path: '', redirectTo: 'login', pathMatch: "full" }
];

