import { Routes } from '@angular/router';
import { LoginSignupPageComponent } from './pages/login-signup-page/login-signup-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { StorePageComponent } from './pages/store-page/store-page.component';
import { FileNotFoundComponent } from './pages/file-not-found/file-not-found.component';
import { StoreItemComponent } from './components/store-item/store-item.component';

export const routes: Routes = [
    { path: 'login', component: LoginSignupPageComponent },
    { path: 'stores', component: HomePageComponent },
    { path: 'stores/:storeId', component: StorePageComponent },
    { path: 'store-item', component: StoreItemComponent },
    { path: '', redirectTo: 'login', pathMatch: "full" },
    { path: '**', component: FileNotFoundComponent }
];

