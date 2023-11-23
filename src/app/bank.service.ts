import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Bank } from './bank';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Funzionalita } from './funzionalita';

@Injectable({
  providedIn: 'root'
})
export class BankService {

  private Url: string = 'https://localhost:7009/api/Banche';

  constructor(private http: HttpClient) { }

  getAllFunzionalita(){
    return this.http.get<Funzionalita[]>('https://localhost:7009/api/Funzionalità')
  }
  getAllBanks(): Observable<Bank[]>{
    return this.http.get<Bank[]>(`${this.Url}`);
  }
}