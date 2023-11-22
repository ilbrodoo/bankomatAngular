import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BanksComponent } from './banks/banks.component';
import { UsersComponent } from './users/users.component';
const routes: Routes = [
  { path: '' , component: BanksComponent,}
  ,{path:'user', component:UsersComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
