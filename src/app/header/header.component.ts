import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddressComponent } from "../address/address.component";
import { UserComponent } from "../user/user.component";

@Component({
    selector: 'app-header',
    standalone: true,
    templateUrl: './header.component.html',
    styleUrl: './header.component.css',
    imports: [CommonModule, AddressComponent, UserComponent]
})
export class HeaderComponent {

}
