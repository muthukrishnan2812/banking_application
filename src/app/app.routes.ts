import { Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { AppComponent } from './app.component';
import { LoginUserComponent } from './login-user/login-user.component';
import { HomeComponent } from './home/home.component';
import { authGuard } from './authGuard/auth.guard';
import { HeroComponent } from './hero/hero.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoanComponent } from './loan/loan.component';
import { AccountComponent } from './account/account.component';
import { TransactionComponent } from './transaction/transaction.component';

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
        canActivate:[authGuard],
        children:[
            {
                path:'dashboard',
                component:DashboardComponent
            },
            {
                path:'loan',
                component:LoanComponent
            },
            {
                path:"account",
                component:AccountComponent
            },
            {
                path:"transaction",
                component:TransactionComponent
            },
            {
                path:"",
                redirectTo:"dashboard",
                pathMatch:"full"
            }
        ]
    },
    {
        path:'hero',
        component:HeroComponent
    }
];
