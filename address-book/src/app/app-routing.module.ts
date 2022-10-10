import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// TODO: add guard(s)

const routes: Routes = [
  {
    path: 'address-book',
    loadChildren: () => import('./address-book/address-book.module').then(m => m.AddressBookModule)
  },
  { path: '', redirectTo: 'address-book', pathMatch: 'full' },
  { path: '**', redirectTo: 'address-book', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
