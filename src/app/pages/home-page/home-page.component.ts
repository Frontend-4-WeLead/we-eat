import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../services/data.service';
import { StoreItemComponent } from '../../components/store-item/store-item.component';
import { ActivatedRoute, Router, RouterLink, RouterOutlet } from '@angular/router';
import { SearchPageComponent } from '../search-page/search-page.component';
import { FormsModule } from '@angular/forms';
import { Store } from '../../models/store';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet, StoreItemComponent, SearchPageComponent, FormsModule],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {
  storesList: Store[] = [];
  popularStoresList: Store[] = [];
  filteredStoresList: Store[] = [];
  filteredPopularStoresList: Store[] = [];
  service = inject(DataService);
  showStores = true;
  selectedCategory: string = 'ALL';
  storesLength: number = 0;
  famousStoresLength: number = 0;

  searchTerm!: string;


  constructor(private route: ActivatedRoute, private router:Router) { }


  getAllStores() {
    this.service.getAllStores().subscribe({
      next: res => {
        this.storesList = res;
        this.filteredStoresList = [...this.storesList];
        this.storesLength= this.filteredStoresList.length;
      }
    })
  }

  getAllFamousStores() {
    this.service.getFamousStores().subscribe({
      next: data => { 
        this.popularStoresList = data; 
        this.filteredPopularStoresList = [...this.popularStoresList];
        
        this.famousStoresLength= this.filteredPopularStoresList.length;
      }
    })
  }

  ngOnInit() {
    this.getAllStores();
    this.getAllFamousStores();
  }

  searchStores() {
    this.filteredStoresList = [...this.storesList];
    this.filteredPopularStoresList = [...this.popularStoresList];
    this.filteredPopularStoresList = this.filteredPopularStoresList.filter(p_store => p_store.name.toLowerCase().includes(this.searchTerm.toLowerCase()) || p_store.category.toLowerCase().includes(this.searchTerm.toLowerCase()));
    this.filteredStoresList = this.filteredStoresList.filter(store => store.name.toLowerCase().includes(this.searchTerm.toLowerCase()) || store.category.toLowerCase().includes(this.searchTerm.toLowerCase()))
    
    this.storesLength= this.filteredStoresList.length;
    this.famousStoresLength= this.filteredPopularStoresList.length;
  }


  public onButton() {
    this.showStores = false
  }

  filterByCategory(category_name:string) {        
    this.filteredStoresList = [...this.storesList];
    this.filteredPopularStoresList = [...this.popularStoresList];
    this.selectedCategory = category_name;
    if (category_name=='ALL'){
      
      this.storesLength= this.filteredStoresList.length;
      this.famousStoresLength= this.filteredPopularStoresList.length;
      return;
    }

    this.filteredPopularStoresList = this.filteredPopularStoresList.filter((p_store) => p_store.category.toLowerCase() === category_name.toLowerCase());    
    this.filteredStoresList = this.filteredStoresList.filter((store) => store.category.toLowerCase() === category_name.toLowerCase());
    
    this.storesLength= this.filteredStoresList.length;
    this.famousStoresLength= this.filteredPopularStoresList.length;

  }


}
