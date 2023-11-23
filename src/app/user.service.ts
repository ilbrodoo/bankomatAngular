import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private usersUrl = 'https://localhost:7009/api/Clienti';

  constructor(private http: HttpClient) {}

  getAllUsers(): Observable<any[]> {
    return this.http.get<any[]>(this.usersUrl);
  }

  bloccaSbloccaUtente(clienteId: number, bloccato: boolean): Observable<any> {
    const url = `${this.usersUrl}/${clienteId}`;
    return this.http.put(url, bloccato);
  }
  creaNuovoUtente(nuovoUtente: User): Observable<any> {
    return this.http.post(this.usersUrl , nuovoUtente);
  }
  changePassword(clienteId: number, nuovaPassword: string) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.put(`${this.usersUrl}/aggiornaPassword/${clienteId}`, `"${nuovaPassword}"`, { headers: headers });
  }
  
  eliminaUtente(clienteId:number) :Observable<any>{
    const url = `${this.usersUrl}/${clienteId}`;
    return this.http.delete(url);
  }


}