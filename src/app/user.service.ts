import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

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

  eliminaUtente(clienteId:number) :Observable<any>{
    const url = `${this.usersUrl}/${clienteId}`;
    return this.http.delete(url);
  }


}
