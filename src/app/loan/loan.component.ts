import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { LoanServiceService } from '../services/loan-service.service';
import { Loan } from '../model/Loan';

@Component({
  selector: 'app-loan',
  imports: [ReactiveFormsModule],
  templateUrl: './loan.component.html',
  styleUrl: './loan.component.scss'
})
export class LoanComponent {

  LoanForm = new FormGroup({
    amount : new FormControl(''),
    applyDate : new FormControl(''),
    approvalDate : new FormControl(''),
    disbursementDate : new FormControl(''),
    balance : new FormControl(''),
    status : new FormControl('')
  })

  constructor(private loanSrv: LoanServiceService){
    console.log(this.userId);
    
  }

  userId: number = JSON.parse(localStorage.getItem('user') || '{}').id;

  applyLoan(){
    if(this.LoanForm.valid){
      const loanData = this.LoanForm.value as Loan;
      this.loanSrv.applyLoan(this.userId,loanData).subscribe({
        next:(res)=>{
          console.log(res);
          console.log('loan applied...');
          this.LoanForm.reset();
        },
        error:(err)=>{
          console.error(err);
          console.log('loan application failed...');
          this.LoanForm.reset();
        }
      })
    }
  }

}