import { Component, inject } from '@angular/core';
import { CommonModule, JsonPipe } from '@angular/common';
import { DataService } from '../../services/data.service';
import { StoreItemComponent } from '../../components/store-item/store-item.component';
import { ActivatedRoute, Router, RouterLink, RouterOutlet } from '@angular/router';
import { SearchPageComponent } from '../search-page/search-page.component';
import { FormsModule } from '@angular/forms';
import { Store } from '../../models/store';
import { NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';
import { Observable, OperatorFunction, debounceTime, distinctUntilChanged, map } from 'rxjs';

const names = [
  'Fast food',
  'Asian',
  'Donuts',
  'Pizza',
  'Souvlaki',
  'Coffee',
  "McDonald's",
  'Nanou Donuts House',
  'StreetWok',
  'Pizza Fan',
  'Roma Pizza',
  'Goodys Burger House',
  'The Big Bad Wolf',
  'Mikel',
  'Gregory',
  'FoodTek',  
  'Coffee Lab',  
  'Cultivos Coffee',
  'Other'
]

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet, StoreItemComponent, SearchPageComponent, 
    FormsModule, NgbTypeaheadModule, JsonPipe],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {
  storesList: Store[] = [];
  popularStoresList: Store[] = [];
  filteredStoresList: Store[] = [];
  filteredPopularStoresList: Store[] = [];
  service = inject(DataService);
  selectedCategory: string = 'ALL';
  storesLength: number = 0;
  famousStoresLength: number = 0;
  searchTerm!: string;
  model: any;

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
    
    this.filteredPopularStoresList = this.filteredPopularStoresList.filter(p_store => 
      p_store.name.toLowerCase().includes(this.searchTerm.toLowerCase()) || 
      p_store.category.toLowerCase().includes(this.searchTerm.toLowerCase()) || 
      (p_store.products && p_store.products.some((p_product: any) => p_product.category.toLowerCase().includes(this.searchTerm.toLowerCase()) ))
    );
    
    this.filteredStoresList = this.filteredStoresList.filter(store => 
      store.name.toLowerCase().includes(this.searchTerm.toLowerCase()) || 
      store.category.toLowerCase().includes(this.searchTerm.toLowerCase()) || 
      (store.products && store.products.some((product: any) => product.category.toLowerCase().includes(this.searchTerm.toLowerCase()) ))
    );
    
    this.storesLength= this.filteredStoresList.length;
    this.famousStoresLength= this.filteredPopularStoresList.length;
  }

  search: OperatorFunction<string, readonly string[]> = (text$: Observable<string>) =>
		text$.pipe(
			debounceTime(200),
			distinctUntilChanged(),
			map((term) =>
				term.length < 2 ? [] : names.filter((v) => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10),
			),
		);

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
