import { Component, EventEmitter, Output } from '@angular/core';
import { RouterLink, RouterLinkActive } from "@angular/router";

@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

  @Output() sectionSelected = new EventEmitter<String>();

  activeSection: string = 'dashboard';

  navigate(section:String){
    this.sectionSelected.emit(section);
  }

}
