import { Routes } from '@angular/router';
import { LoginSignupPageComponent } from './pages/login-signup-page/login-signup-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { StorePageComponent } from './pages/store-page/store-page.component';

export const routes: Routes = [
    { path: 'login', component: LoginSignupPageComponent },
    { path: 'stores', component: HomePageComponent },
    { path: 'stores/:storeId', component: StorePageComponent },
    { path: '', redirectTo: 'login', pathMatch: "full" }
];

