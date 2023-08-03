import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import {HomeComponent} from "../pages/home/home.component";
import {AuthGuard} from "../pages/auth/auth.guard";

const routes: Routes = [{ path: '', component: DashboardComponent },   {   path: 'home',
  loadChildren: () => import('../pages/home/home.component').then(m => m.HomeComponent),
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
