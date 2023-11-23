import { AggiungiUserComponent } from './aggiungi-user/aggiungi-user.component';
import { BanksComponent } from './banks/banks.component';
import { ModificaBloccoComponent } from './modifica-blocco/modifica-blocco.component'; // Import your ModificaBloccoComponent
import { ModificaPasswordComponent } from './modifica-password/modifica-password.component';
import { NgModule } from '@angular/core';
import { UsersComponent } from './users/users.component';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: '', component: BanksComponent },
  { path: 'users', component: UsersComponent },
   { path: 'modifica-blocco/:clienteId/:bloccato', component: ModificaBloccoComponent },
   {path:'aggiungi-utente', component:AggiungiUserComponent },
   {path:'modifica-password/:clienteId', component:ModificaPasswordComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
