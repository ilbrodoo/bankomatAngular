import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BankService } from './bank.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { BanksComponent } from './banks/banks.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    BanksComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [BankService], // Aggiungi BankService ai fornitori
  bootstrap: [AppComponent]
})
export class AppModule { }
