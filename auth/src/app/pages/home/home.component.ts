import {Component, OnInit} from '@angular/core';
import {IUser} from "../auth/interfaces/user";
import {AuthService} from "../auth/auth.service";
import {Router} from "@angular/router";
import {IAccessData} from "../auth/interfaces/access-data";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  user!:IUser
  constructor(private authSvc:AuthService, private router:Router) {
  }
  ngOnInit() {
    this.authSvc.user$.subscribe((data:IAccessData|null): void =>{
      this.user = data?.user as IUser

    })
  }

}
