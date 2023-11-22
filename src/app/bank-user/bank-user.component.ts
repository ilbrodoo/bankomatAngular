// import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute } from '@angular/router';
// import { UserService } from '../user.service';

// @Component({
//   selector: 'app-bank-user',
//   templateUrl: './bank-user.component.html',
//   styleUrls: ['./bank-user.component.css']
// })
// export class BankUserComponent implements OnInit {
//   idBanca: string | null;
//   utenti: any[] = [];

//   constructor(private route: ActivatedRoute, private userService: UserService) {
//     this.idBanca = this.route.snapshot.paramMap.get('idBanca');
//   }

//   ngOnInit(): void {
//     if (this.idBanca) {
//       // Chiamata al servizio per ottenere gli utenti associati alla banca
//       this.userService.getClienteByIdBanca(parseInt(this.idBanca, 10)).subscribe(
//         (data) => {
//           this.utenti = data;
//           console.log(data);
//         },
//         (error) => {
//           console.error('Errore nella chiamata API', error);
//         }
//       );
//     }
//   }
// }
