import { Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { AppComponent } from './app.component';
import { LoginUserComponent } from './login-user/login-user.component';
import { HomeComponent } from './home/home.component';
import { authGuard } from './authGuard/auth.guard';

export const routes: Routes = [
    {
        path:'',
        redirectTo:'user',
        pathMatch:'full'
    },
    {
        path:'user',
        component:UserComponent
    },
    {
        path:'login',
        component:LoginUserComponent
    },
    {
        path:'home',
        component:HomeComponent,
        canActivate:[authGuard]
    }
];
