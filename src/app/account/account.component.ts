import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CreateAccountComponent } from "./create-account/create-account.component";
import { AccountServiceService } from '../services/account-service.service';
import { Account } from '../model/Account';

@Component({
  selector: 'app-account',
  imports: [CreateAccountComponent],
  templateUrl: './account.component.html',
  styleUrl: './account.component.scss'
})
export class AccountComponent implements OnInit {

  constructor(private accountSrv:AccountServiceService){
  }

  ngOnInit(){
    console.log(this.getAccountDetails());
    

    this.getAccountDetails();
    
  }

  sectionSelected:String = '';
    
  userId:number = JSON.parse(localStorage.getItem('user')|| '{}').id;

  userData : any[] = [];

  navigate(section:String){
    this.sectionSelected  = section;
  }

  getAccountDetails(): void {
    this.accountSrv.getAccountById(this.userId).subscribe({
      next: (data: Account[]) => {
        this.userData = data;
      },
      error: (err) => {
        console.error('Error fetching account details:', err);
      }
    });
  }


}
