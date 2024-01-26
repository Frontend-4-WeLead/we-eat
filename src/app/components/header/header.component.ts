import { Component, NgModule, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddressComponent } from "./address/address.component";
import { UserComponent } from "./user/user.component";
import { Router } from '@angular/router';
import { UserDetailsComponent } from './user-details/user-details.component';
import { ModalModule, ModalService } from '@developer-partners/ngx-modal-dialog';
import { AddressService } from '../../services/address.service';

@Component({
    selector: 'app-header',
    standalone: true,
    templateUrl: './header.component.html',
    styleUrl: './header.component.css',
    imports: [CommonModule ,AddressComponent, UserComponent, UserDetailsComponent, ModalModule]
})
export class HeaderComponent implements OnInit {

  selectedAddress: string = '';

  constructor(private router: Router, private readonly _modalService: ModalService, private addressService: AddressService) { }

  ngOnInit() {
      this.selectAddress('Ipirou 1');
  }

  public showModal(): void {
      this._modalService.show(UserDetailsComponent, {
          title: 'My Account',
          mode: 'disableFullScreen'
      });
  }

  isLoginOrSignUpPage(): boolean {
      const path = this.router.url;
      return path.includes("login") || path.includes("register");
  }

  searchFor(searchValue: string): void {
     
  }

  selectAddress(address: string) {
      this.addressService.publish(address);
      this.selectedAddress = address;
  }
}