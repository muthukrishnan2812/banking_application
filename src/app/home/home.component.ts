import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserDetailsComponent } from "../user-details/user-details.component";

@Component({
  selector: 'app-home',
  imports: [UserDetailsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent  {

  
}


