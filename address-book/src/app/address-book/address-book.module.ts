import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'
import { PeopleComponent } from './components/people/people.component';
import { PeopleDetailsComponent } from './components/people/people-details/people-details.component';
import { AddressBookRoutingModule } from './address-book-routing.module';



@NgModule({
  declarations: [
    PeopleComponent,
    PeopleDetailsComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    AddressBookRoutingModule,
  ]
})
export class AddressBookModule { }
