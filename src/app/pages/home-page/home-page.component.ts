import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StroreItemComponent } from '../../components/strore-item/strore-item.component';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule,StroreItemComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {
  storesList: any;
  service = inject(DataService);

  getAllShops(){
    this.service.getAllShops().subscribe({
      next:res => this.storesList = res
    })
  }  

  ngOnInit(){
    this.getAllShops();
  }
}
