import { Component, EventEmitter, Output } from '@angular/core';
import { CreateAccountComponent } from "./create-account/create-account.component";

@Component({
  selector: 'app-account',
  imports: [CreateAccountComponent],
  templateUrl: './account.component.html',
  styleUrl: './account.component.scss'
})
export class AccountComponent {

  sectionSelected:String = '';


  navigate(section:String){
    this.sectionSelected  = section;
  }

  getAccount(id:any){
    
  }


}
