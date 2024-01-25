import { Routes } from '@angular/router';
import { LoginSignupPageComponent } from './pages/login-signup-page/login-signup-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { StorePageComponent } from './pages/store-page/store-page.component';
import { StoreItemComponent } from './components/store-item/store-item.component';
import { CheckoutPageComponent } from './pages/checkout-page/checkout-page.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

export const routes: Routes = [
    { path: 'login', component: LoginSignupPageComponent },
    { path: 'stores', component: HomePageComponent },
    { path: 'stores/:storeId', component: StorePageComponent },
    { path: 'store-item', component: StoreItemComponent },
    { path: 'checkout', component: CheckoutPageComponent },
    { path: '', redirectTo: 'login', pathMatch: "full" },
    { path: '**', component: PageNotFoundComponent }
];

