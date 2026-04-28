import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../model/User';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  private baseUrl = "http://localhost:8080/api/user";
  constructor(private http:HttpClient) { }

  registerUser(user: User):Observable<User>{
    return this.http.post<User>(`${this.baseUrl}/save`,user);
  }

  deleteUser(id:number){
    return this.http.delete(`${this.baseUrl}/delete/${id}`);
  }

  getUser(id:number){
    return this.http.get<User>(`${this.baseUrl}/getById/${id}`);
  }

  loginUser(data:any){
    return this.http.post(`${this.baseUrl}/login`,data);
  }

  
}
