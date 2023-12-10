import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-strore-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './strore-item.component.html',
  styleUrl: './strore-item.component.css'
})
export class StroreItemComponent {
  @Input() store: any;
}
