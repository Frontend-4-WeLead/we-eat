import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { DataService } from './services/data.service';
import { HeaderComponent } from './header/header.component';
import { StorePageComponent } from './pages/store-page/store-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { FooterComponent } from './footer/footer.component';
import { MostFamousStoresComponent } from './pages/store-page/components/most-famous-stores/most-famous-stores.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, StorePageComponent, HomePageComponent, FooterComponent, MostFamousStoresComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  data_service = inject(DataService)

  // getProductsById() {
  //   this.data_service.getProductsById(1).subscribe({
  //     next: (res) => {
  //       console.log(res)
  //     }
  //   })
  // }
  getStoreById() {
    this.data_service.getStoreById(2).subscribe({
      next: (res) => {
        console.log(res)
      }
    });
  }
  getAllStores() {
    this.data_service.getAllStores().subscribe({
      next: (res) => {
        console.log(res)
      }
    });
  }

  getFamousStores() {
    this.data_service.getFamousStores().subscribe({
      next: (res) => {
        console.log(res)
      }
    });
  }


}
