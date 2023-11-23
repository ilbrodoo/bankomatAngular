import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { User } from '../user';
import { BankService } from '../bank.service';
@Component({
  selector: 'app-aggiungi-user',
  templateUrl: './aggiungi-user.component.html',
  styleUrls: ['./aggiungi-user.component.css']
})
export class AggiungiUserComponent implements OnInit {
  nuovoUtente: User = { id: 0, idBanca: 0, nomeUtente: '', password: '',bloccato:false };
  banks: any[] = [];

  constructor(private userService: UserService, private bankService: BankService, private router: Router) {}

  ngOnInit() {
    this.getAllBanks();
  }

  getAllBanks() {
    this.bankService.getAllBanks().subscribe((banks) => {
      this.banks = banks;
    });
  }

  formValido(): boolean {
    return !!this.nuovoUtente.idBanca && !!this.nuovoUtente.nomeUtente && !!this.nuovoUtente.password;
  }

  creaNuovoUtente() {

    this.userService.creaNuovoUtente(this.nuovoUtente).subscribe(
      (response: any) => {
        console.log('Nuovo utente creato con successo', response);
        this.router.navigate(['/users']);
      },
      (error: any) => {
        console.error('Errore durante la creazione del nuovo utente', error);
        // Gestisci gli errori in base alle tue esigenze
      }
    );
  }
}
