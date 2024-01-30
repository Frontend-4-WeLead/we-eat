import { Component, inject } from '@angular/core';
import { CommonModule, JsonPipe } from '@angular/common';
import { DataService } from '../../services/data.service';
import { StoreItemComponent } from '../../components/store-item/store-item.component';
import { ActivatedRoute, Router, RouterLink, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Product, Store } from '../../models/store';
import { NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';
import { Observable, OperatorFunction, debounceTime, distinctUntilChanged, map } from 'rxjs';
import { LocalStorageService } from '../../services/local-storage.service';

/* const names = [
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
] */

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet, StoreItemComponent,
    FormsModule, NgbTypeaheadModule, JsonPipe],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {
  private storesList: Store[] = [];
  private famousStoresList: Store[] = [];  
  private allStoresList: Store[] = [];
  filteredStoresList: Store[] = [];
  filteredFamousStoresList: Store[] = [];
  cart: Array<Product> = [];
  service = inject(DataService);
  selectedCategory: string = 'ALL';
  storesLength: number = 0;
  famousStoresLength: number = 0;
  searchTerm: string = '';
  model: any;
  autoCompleteTerms: string[] =[];

  constructor(private route: ActivatedRoute, private router:Router, private localStorageService: LocalStorageService) { }


  getAllStores() {
    this.service.getAllStores().subscribe({
      next: res => {
        this.storesList = res;        
        this.allStoresList = [...this.storesList];

        this.getSearchAutoCompleteTerms();

        //remove famous stores from stores list
        this.storesList= this.storesList.filter(store => !this.famousStoresList.some(famousStore=> famousStore.id === store.id));

        this.filteredStoresList = [...this.storesList];
        this.storesLength= this.filteredStoresList.length;
      }
    })
  }

  getAllFamousStores() {
    this.service.getFamousStores().subscribe({
      next: data => { 
        this.famousStoresList = data; 
        
        this.filteredFamousStoresList = [...this.famousStoresList];
        
        this.famousStoresLength= this.filteredFamousStoresList.length;
      }
    })
  }

  ngOnInit() {    
    this.getAllFamousStores();
    this.getAllStores();
    this.localStorageService.setItem('Cart', '[]');

  }

  //Get search auto complete terms from json (unique:store names, store categories, store products categories)
  getSearchAutoCompleteTerms(){
    this.autoCompleteTerms = this.allStoresList
    .map(store => [store.name, store.category, ...store.products.map(product => this.capitalizeFirstLetter(product.category) )])
    .flat()
    .filter(this.uniqueFilter);

    console.log('auto', this.autoCompleteTerms);
  }

  //Search searchTerm in famous stores and other strores
  searchStores() {
    this.filteredStoresList = [...this.storesList];
    this.filteredFamousStoresList = [...this.famousStoresList];

    this.selectedCategory = 'ALL';

    this.filteredStoresList=this.searchStoresByAttributes(this.filteredStoresList,this.searchTerm);
    this.filteredFamousStoresList=this.searchStoresByAttributes(this.filteredFamousStoresList,this.searchTerm);
    
    this.storesLength= this.filteredStoresList.length;
    this.famousStoresLength= this.filteredFamousStoresList.length;
  }

  //Search stores by store name, store category, store product category
  searchStoresByAttributes(stores:Store[],searchTearm:string):Store[]{
    return stores.filter(store => 
      store.name.toLowerCase().includes(searchTearm.toLowerCase()) || 
      store.category.toLowerCase().includes(searchTearm.toLowerCase()) || 
      (store.products && store.products.some((product: any) => product.category.toLowerCase().includes(searchTearm.toLowerCase()) ))
    );
  }

  search: OperatorFunction<string, readonly string[]> = (text$: Observable<string>) =>
		text$.pipe(
			debounceTime(200),
			distinctUntilChanged(),
			map((term) =>
				term.length < 2 ? [] : this.autoCompleteTerms.filter((v) => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10),
			),
		);

  filterByCategory(category_name:string) {        
    this.filteredStoresList = [...this.storesList];
    this.filteredFamousStoresList = [...this.famousStoresList];
    this.selectedCategory = category_name;
    this.searchTerm = '';

    if (category_name == 'ALL'){      
      this.storesLength = this.filteredStoresList.length;
      this.famousStoresLength = this.filteredFamousStoresList.length;
      return;
    }

    this.filteredFamousStoresList = this.filteredFamousStoresList.filter((p_store) => p_store.category.toLowerCase() === category_name.toLowerCase());    
    this.filteredStoresList = this.filteredStoresList.filter((store) => store.category.toLowerCase() === category_name.toLowerCase());
    
    this.storesLength = this.filteredStoresList.length;
    this.famousStoresLength = this.filteredFamousStoresList.length;

  }

  //Filters out duplicate values from an array.
  uniqueFilter(value: string, index: number, self: string[]) {
    return self.indexOf(value) === index;
  }

  capitalizeFirstLetter(string:string) 
  {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
  }


}
