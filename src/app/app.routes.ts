import { Routes } from '@angular/router';
import { LoginSignupPageComponent } from './pages/login-signup-page/login-signup-page.component';

export const routes: Routes = [
    { path: 'login', component: LoginSignupPageComponent },
    { path: '', redirectTo: 'login', pathMatch: "full" }
];
