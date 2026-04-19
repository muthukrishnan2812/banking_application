import { Component } from '@angular/core';
import { UserServiceService } from '../services/user-service.service';
import { User } from '../model/User';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-user',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {
  user?:User;
  // userData : User[] = [];

  signUpForm =new FormGroup({
      name: new FormControl('',Validators.required),
      email: new FormControl('',Validators.required),
      password: new FormControl('', Validators.required)
    })

  constructor(private service:UserServiceService, private router:Router){
     
  }

  registerUser(){
    if(this.signUpForm.valid){
      const userData = this.signUpForm.value as User;
      this.service.registerUser(userData).subscribe((res)=>{console.log(res)})
      this.router.navigate(['/login'])
      this.resetForm();
    }
  }
  resetForm(){
    this.signUpForm.reset()
  }


}
