import { Component } from '@angular/core';
import { UserService } from '../user.service';
import {ActivatedRoute, Route, Router, RouterLink } from '@angular/router';
@Component({
  selector: 'app-modifica-password',
  templateUrl: './modifica-password.component.html',
  styleUrls: ['./modifica-password.component.css']
})
export class ModificaPasswordComponent {
  
  nuovaPassword :string = '';
  clienteId :number = 0;

  constructor(private userService :UserService,private router: Router, private route:ActivatedRoute){}
  

  ngOnInit(): void {
    // Retrieve parameters from the route
    this.route.params.subscribe(params => {
      this.clienteId = +params['clienteId']; // Use the + to convert to a number
    });
  }
  changePassword() {
    this.userService.changePassword(this.clienteId, this.nuovaPassword).subscribe(
       () => {
          console.log('Password changed successfully');
          this.router.navigate(['/users']);
       },
       (error) => {
          console.error('Error changing password:', error);
       }
    );
 }
}

