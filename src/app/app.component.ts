import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  data_service = inject(DataService)

  getZ() {
    this.data_service.getZ().subscribe({
      next: (res) => {
        console.log(res)
      }
    })
  }
  getY() {
    this.data_service.getY().subscribe({
      next: (res) => {
        console.log(res)
      }
    });
  }
  getX() {
    this.data_service.getX().subscribe({
      next: (res) => {
        console.log(res)
      }
    });
  }


}
