import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Loan } from '../model/Loan';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoanServiceService {

  constructor(private http: HttpClient) { }

  private baseUrl = "https://springboot-bankingapplication.onrender.com/api/loan";


  applyLoan(userId:number , loan:Loan){
    return this.http.post(`${this.baseUrl}/applyLoan/${userId}`,loan,{responseType:'text'});
  }
}
