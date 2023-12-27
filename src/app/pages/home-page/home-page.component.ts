import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../services/data.service';
import { StoreItemComponent } from '../../components/store-item/store-item.component';
import { MostFamousStoresService } from '../../services/most-famous-stores.service';
import { FamousStore } from '../../models/famous_store';
import { MostFamousStoresComponent } from '../store-page/components/most-famous-stores/most-famous-stores.component';



@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule, StoreItemComponent, MostFamousStoresComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {
  storesList: any;
  famousStores: FamousStore[] =[];
  service = inject(DataService);
  secondService = inject(MostFamousStoresService)
  

  getAllStores(){
    this.service.getAllStores().subscribe({
      next: res => this.storesList = res
    })
  }  

  getAllFamousStores(){
    this.secondService.getFamousStores().subscribe({
      next: data => this.famousStores = data
    })
  }

  ngOnInit(){
    this.getAllStores();
    this.getAllFamousStores();
  }
}
