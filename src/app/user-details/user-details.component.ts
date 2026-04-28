import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-details',
  imports: [],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.scss'
})
export class UserDetailsComponent implements OnInit {

  userName:String="";
    greeting:String="";
  
    constructor(private router:Router){}
    ngOnInit(): void {
      const user = JSON.parse(localStorage.getItem('user')|| '{}');
       this.userName = user.name || 'User';
       this.setGreeting();
    }
  
  setGreeting() {
      const hour = new Date().getHours();
  
      if (hour < 12) {
        this.greeting = 'Good Morning';
      } else if (hour < 18) {
        this.greeting = 'Good Afternoon';
      } else {
        this.greeting = 'Good Evening';
      }
    }
  
    logout() {
      localStorage.removeItem('user');
      this.router.navigate(['/']);
    }

}
