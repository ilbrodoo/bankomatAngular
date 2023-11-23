import { Component } from '@angular/core';
import { BankService } from '../bank.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-banks',
  templateUrl: './banks.component.html',
  styleUrls: ['./banks.component.css']
})
export class BanksComponent {
  banks: any[] = []; // Assicurati di avere un array di banche nel tuo componente
  selectedBank: any; // Variabile per tenere traccia della banca selezionata
  funzionalita:any[] = [];
  constructor(private bankService: BankService ,private router: Router, private route: ActivatedRoute) {}

  gestisciUtenti(idBanca: string) {
    // Naviga al componente bank-user e passa l'idBanca come parametro
    this.router.navigate(['bank-user', { idBanca: idBanca }], { relativeTo: this.route });
  }
  getAllFunzionalita(){
    this.bankService.getAllFunzionalita().subscribe();
  }
 
  getAllBanks() {
    this.bankService.getAllBanks().subscribe((banks) => {
      this.banks = banks;
    });
  }
  ngOnInit() :void{
    this.getAllBanks();
    this.getAllFunzionalita();
  }


}