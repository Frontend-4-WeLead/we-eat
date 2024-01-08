import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../services/data.service';
import { StoreItemComponent } from '../../components/store-item/store-item.component';
import { MostFamousStoresService } from '../../services/most-famous-stores.service';
import { FamousStore } from '../../models/famous_store';
import { MostFamousStoresComponent } from '../store-page/components/most-famous-stores/most-famous-stores.component';
import { ActivatedRoute, RouterLink, RouterOutlet } from '@angular/router';
import { SearchPageComponent } from '../search-page/search-page.component';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet, StoreItemComponent, MostFamousStoresComponent, SearchPageComponent, FormsModule],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {
  storesList: any;
  famousStores: FamousStore[] =[];
  service = inject(DataService);
  secondService = inject(MostFamousStoresService)
  showStores = true;
 
  searchTerm!: string;


  constructor(private foodService: MostFamousStoresService, private route: ActivatedRoute){}


  getAllStores(){
    this.service.getAllStores().subscribe({
      next: res => this.storesList = res
    })
  }  

  getAllFamousStores(){
    this.secondService.getFamousStores().subscribe({
      next: data => { this.famousStores = data; console.log(this.famousStores)}
    })
  }

  ngOnInit(){
    this.getAllStores();
    this.getAllFamousStores();
  }

  searchStores() {
    this.famousStores = this.famousStores.filter( s => s.name.toLowerCase().includes(this.searchTerm.toLowerCase()))
    console.log( this.famousStores)
  }

  public onButton(){
    this.showStores = true
  }

 
}
