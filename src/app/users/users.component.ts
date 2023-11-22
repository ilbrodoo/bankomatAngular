import { Component } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  users: any[] = [];
  bloccato: boolean = false;

  constructor(private userService: UserService) {}

  getAllUsers() {
    this.userService.getAllUsers().subscribe((users) => {
      this.users = users;
    });
  }

  bloccaSbloccaUtente(user: any) {
    const clienteId = user.id;
    console.log(user);
    const bloccato = !user.bloccato;
  
    this.userService.bloccaSbloccaUtente(clienteId, bloccato).subscribe(() => {
      this.getAllUsers(); 
    });
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
