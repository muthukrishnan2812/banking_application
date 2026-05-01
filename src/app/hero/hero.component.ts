import { Component } from '@angular/core';
import { DashboardComponent } from "../dashboard/dashboard.component";
import { TransactionComponent } from "../transaction/transaction.component";
import { LoanComponent } from "../loan/loan.component";
import { AccountComponent } from "../account/account.component";

@Component({
  selector: 'app-hero',
  imports: [DashboardComponent, TransactionComponent, LoanComponent, AccountComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {

  activeSection:String = 'dashboard';

  showSection(section:String){
    this.activeSection = section;
  }

}
