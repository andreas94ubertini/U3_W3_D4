import {Component, OnInit} from '@angular/core';
import {AuthService} from "../pages/auth/auth.service";
import {IUser} from "../pages/auth/interfaces/user";
import {IAccessData} from "../pages/auth/interfaces/access-data";
import {Router} from "@angular/router";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  user!:IUser
  constructor(private authSvc:AuthService, private router:Router) {
  }
  ngOnInit() {
  this.authSvc.user$.subscribe((data:IAccessData|null): void =>{
    this.user = data?.user as IUser
    console.log(this.user)
  })
  }
logOut(){
    this.authSvc.logout()
  this.router.navigate([''])
}
}
