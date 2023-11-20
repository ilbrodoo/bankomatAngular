import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Bank } from './bank';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BankService {

  private countriesUrl: string = 'https://localhost:7009/';

  constructor(private http: HttpClient) { }

  getAllBanks(): Observable<Bank[]>{
    return this.http.get<Bank[]>(`${this.countriesUrl}api/Banche`);
  }


}
