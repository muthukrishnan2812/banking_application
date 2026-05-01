import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Account } from '../model/Account';

@Injectable({
  providedIn: 'root'
})
export class AccountServiceService {

  baseUrl = "http://localhost:8080/api/account/";

  constructor(private http:HttpClient) { }


  createAccount(id:any, account:Account):Observable<any>{
    return this.http.post(`${this.baseUrl}createAccount/${id}`, account,{ responseType: 'text' });
  }

  getAccountById(id:any):Observable<any>{
    return this.http.get(`${this.baseUrl}getAccountByUserId/${id}`);
  }
}
