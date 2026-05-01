import { Component } from '@angular/core';
import { AccountServiceService } from '../../services/account-service.service';
import { FormControl, FormGroup, ɵInternalFormsSharedModule, ReactiveFormsModule } from '@angular/forms';
import { Account } from '../../model/Account';

@Component({
  selector: 'app-create-account',
  imports: [ɵInternalFormsSharedModule, ReactiveFormsModule],
  templateUrl: './create-account.component.html',
  styleUrl: './create-account.component.scss'
})
export class CreateAccountComponent {

  constructor(private accountSrv:AccountServiceService){
    console.log(this.userId);
    
  }

  accountForm=new FormGroup({
    accountNo : new FormControl(''),
    balance : new FormControl('')
  })

  userId : number =  JSON.parse(localStorage.getItem('user') || '{}').id;

  createAccount(){

    if(this.accountForm.valid){
      const accountData = this.accountForm.value as Account;

      this.accountSrv.createAccount(this.userId,accountData).subscribe({
        next:(res)=>{
          console.log(res)
          this.accountForm.reset();
        },
        error:(err)=>{
          console.log(err);
          
        }
      })
    }
    
  }
    
}
