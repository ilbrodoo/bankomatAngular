import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BankService } from './bank.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { BanksComponent } from './banks/banks.component';
import {  HttpClientModule } from '@angular/common/http';
import { ModificaBloccoComponent } from './modifica-blocco/modifica-blocco.component';
@NgModule({
  declarations: [
    AppComponent,
    BanksComponent,
    UsersComponent,
    ModificaBloccoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [BankService], // Aggiungi BankService ai fornitori
  bootstrap: [AppComponent]
})
export class AppModule { }
