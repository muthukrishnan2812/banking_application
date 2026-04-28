import { Component } from '@angular/core';
import { UserDetailsComponent } from '../user-details/user-details.component';

@Component({
  selector: 'app-navbar',
  imports: [UserDetailsComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

}
