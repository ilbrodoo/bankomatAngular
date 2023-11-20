import { Component } from '@angular/core';
import { BankService } from '../bank.service';

@Component({
  selector: 'app-banks',
  templateUrl: './banks.component.html',
  styleUrls: ['./banks.component.css']
})
export class BanksComponent {
  banks: any[] = []; // Assicurati di avere un array di banche nel tuo componente
  selectedBank: any; // Variabile per tenere traccia della banca selezionata

  constructor(private bankService: BankService) {}

  getAllBanks() {
    this.bankService.getAllBanks().subscribe((banks) => {
      this.banks = banks;
    });
  }

  selectBank(event: any) {
    const selectedBankId = event.target.value;
    this.selectedBank = this.banks.find((bank) => bank.id === selectedBankId);
  }
}
