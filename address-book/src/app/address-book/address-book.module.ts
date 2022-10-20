import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'
import { PeopleComponent } from './components/people/people.component';
import { PeopleDetailsComponent } from './components/people/people-details/people-details.component';
import { AddressBookRoutingModule } from './address-book-routing.module';

// Material imports
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTableModule } from '@angular/material/table';

const MaterialModules = [
  MatPaginatorModule,
  MatProgressSpinnerModule,
  MatTableModule,
];

@NgModule({
  declarations: [
    PeopleComponent,
    PeopleDetailsComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    AddressBookRoutingModule,
    ...MaterialModules,
  ]
})
export class AddressBookModule { }
