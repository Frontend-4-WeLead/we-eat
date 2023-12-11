import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './components/product/product.component';
import { HeaderComponent } from '../../header/header.component';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-store-page',
  standalone: true,
  imports: [CommonModule, ProductComponent, HeaderComponent],
  templateUrl: './store-page.component.html',
  styleUrl: './store-page.component.css'
})
export class StorePageComponent implements OnInit {
  storeInfo: any;
  data_service = inject(DataService)
  cart: Array<any> = [];

  ngOnInit(): void {
    this.data_service.getStoreById(2).subscribe({
      next: (data) => {
        this.storeInfo = data;
      }
    })
  }
}

