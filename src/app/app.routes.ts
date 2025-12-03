import { NgModel } from '@angular/forms';
import { Routes } from '@angular/router';
import { LoginPage } from './+pages/public/login-page/login-page';
import { HomePage } from './+pages/public/private/home-page/home-page';
import { AdminDashboardPageComponent } from './+pages/public/private/admin-dashboard-page/admin-dashboard-page.component';

export const routes: Routes = [
    {path: 'login', component:LoginPage},
    {path: 'home' , component: HomePage},
    {path: 'Dashboard' , component: AdminDashboardPageComponent},
    {path: '**', redirectTo: 'navigation'},
    {path: '', redirectTo:'/login', pathMatch: 'full'},
];
