import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-store-item',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './store-item.component.html',
  styleUrl: './store-item.component.css'
})
export class StoreItemComponent {
  @Input() store: any;
}
