import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-modifica-blocco',
  templateUrl: './modifica-blocco.component.html',
  styleUrls: ['./modifica-blocco.component.css']
})
export class ModificaBloccoComponent implements OnInit {
  clienteId!: number;
  bloccato!: boolean;

  constructor(private route: ActivatedRoute, private router: Router, private userService: UserService) {}

  ngOnInit(): void {
    // Retrieve parameters from the route
    this.route.params.subscribe(params => {
      this.clienteId = +params['clienteId']; // Use the + to convert to a number
      this.bloccato = params['bloccato'] === 'true'; // Convert string to boolean
    });
  }

  salvaModifiche() {
   
    this.userService.bloccaSbloccaUtente(this.clienteId, this.bloccato).subscribe(
      () => {
        this.router.navigate(['/users']);
      },
      error => {
       
        console.error('Errore durante il salvataggio:', error);

      }
    );
  }
}
