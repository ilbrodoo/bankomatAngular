import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  users: any[] = [];

  constructor(private userService: UserService, private router: Router) {}

  getAllUsers() {
    this.userService.getAllUsers().subscribe((users) => {
      this.users = users;
    });
  }

  bloccaSbloccaUtente(user: any) {
    const clienteId = user.id;
    const bloccato = !user.bloccato;
    this.router.navigate(['/modifica-blocco', clienteId, bloccato]);
  }

  modificaPassword(user:any){
    const clienteId = user.id;
    this.router.navigate(['/modifica-password',clienteId]); 
  }
  aggiungiUtente() {
    this.router.navigate(['/aggiungi-utente']); 
    }
  

  eliminaUtente(user: any) {
    const clienteId = user.id;

    const confermaEliminazione = window.confirm('Sei sicuro di voler eliminare questo utente?');

    if (confermaEliminazione) {
      this.userService.eliminaUtente(clienteId).subscribe(
        () => {
          this.getAllUsers();
        },
      );
    }
  }

  ngOnInit(): void {
    this.getAllUsers();
  }
}

  