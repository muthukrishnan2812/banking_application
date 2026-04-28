import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserDetailsComponent } from "../user-details/user-details.component";
import { NavbarComponent } from "../navbar/navbar.component";
import { HeroComponent } from "../hero/hero.component";

@Component({
  selector: 'app-home',
  imports: [NavbarComponent, HeroComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent  {

  
}


