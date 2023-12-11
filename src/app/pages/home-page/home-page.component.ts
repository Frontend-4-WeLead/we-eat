import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../services/data.service';
import { StoreItemComponent } from '../../components/store-item/store-item.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule,StoreItemComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {
  storesList: any;
  service = inject(DataService);

  getAllStores(){
    this.service.getAllStores().subscribe({
      next:res => this.storesList = res
    })
  }  

  ngOnInit(){
    this.getAllStores();
  }
}
