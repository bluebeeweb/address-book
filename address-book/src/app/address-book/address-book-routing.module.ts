import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PeopleComponent } from './components/people/people.component';

const routes: Routes = [
  {
    path: '',
    component: PeopleComponent, 
  },
  { path: '**', redirectTo: 'address-book', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddressBookRoutingModule { }