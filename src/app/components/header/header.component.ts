import { Component, NgModule, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddressComponent } from "./address/address.component";
import { Router } from '@angular/router';
import { UserDetailsComponent } from './user-details/user-details.component';
import { ModalModule, ModalService } from '@developer-partners/ngx-modal-dialog';
import { AddressService } from '../../services/address.service';
import { Address, User } from '../../models/user';
import { UserService } from '../../services/user.service';

@Component({
    selector: 'app-header',
    standalone: true,
    templateUrl: './header.component.html',
    styleUrl: './header.component.css',
    imports: [CommonModule ,AddressComponent, UserDetailsComponent, ModalModule]
})
export class HeaderComponent implements OnInit {

  selectedAddress: string = '';
  service = inject(UserService);
  user: User[] = [];

  constructor(private router: Router, private readonly _modalService: ModalService, private addressService: AddressService) { }

  ngOnInit() {     
    this.getUser();
  }

  getUser(){
    this.service.getUser().subscribe({
      next: res => {
        this.user = res; console.log(this.user);
        if (this.user[0]?.address_list?.length > 0) {
          this.selectAddress(this.formatAddress(this.user[0].address_list[0]));
        }
      }
    })
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

  formatAddress(address: Address): string {
    return `${address.street} ${address.number}, ${address.district}, ${address.city}`;
  }

  selectAddress(address: string ): void  {      
    this.addressService.publish(address);
    this.selectedAddress = address;
  }
}