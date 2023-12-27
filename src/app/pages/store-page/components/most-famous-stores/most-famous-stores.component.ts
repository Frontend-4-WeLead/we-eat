import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FamousStore } from '../../../../models/famous_store';

@Component({
  selector: 'app-most-famous-stores',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './most-famous-stores.component.html',
  styleUrl: './most-famous-stores.component.css'
})
export class MostFamousStoresComponent {
@Input() famousStores: any;
}
