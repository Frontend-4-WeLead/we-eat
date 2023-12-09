import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { DataService } from './services/data.service';
import { HeaderComponent } from './header/header.component';
import { StorePageComponent } from './pages/store-page/store-page.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, StorePageComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  data_service = inject(DataService)

  getProductsById() {
    this.data_service.getProductsById(1).subscribe({
      next: (res) => {
        console.log(res)
      }
    })
  }
  getShopById() {
    this.data_service.getShopById(2).subscribe({
      next: (res) => {
        console.log(res)
      }
    });
  }
  getAllShops() {
    this.data_service.getAllShops().subscribe({
      next: (res) => {
        console.log(res)
      }
    });
  }


}
