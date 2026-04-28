import { Component } from '@angular/core';
import { DashboardComponent } from "../dashboard/dashboard.component";
import { TransactionComponent } from "../transaction/transaction.component";

@Component({
  selector: 'app-hero',
  imports: [DashboardComponent, TransactionComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {

}
