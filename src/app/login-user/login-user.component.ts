import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserServiceService } from '../services/user-service.service';
import { Router } from '@angular/router';
import { AuthServiceService } from '../services/auth-service.service';

@Component({
  selector: 'app-login-user',
  imports: [ReactiveFormsModule],
  templateUrl: './login-user.component.html',
  styleUrl: './login-user.component.scss'
})
export class LoginUserComponent {


  constructor(private service:UserServiceService, private router:Router, private auth:AuthServiceService){}

  loginForm = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  })

  loginUser() {
  if (this.loginForm.valid) {
    const data = this.loginForm.getRawValue();

    this.service.loginUser(data).subscribe({
      next: (res: any) => {
        console.log(res);

        this.auth.login(); 
        this.router.navigate(['/home']);
        this.loginForm.reset();
      },
      error: () => {
        console.log("Login failed");
      }
    });
  }
}

}
