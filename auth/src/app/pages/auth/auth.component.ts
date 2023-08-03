import {Component, OnInit} from '@angular/core';
import {IUser} from "./interfaces/user";
import {AuthService} from "./auth.service";
import {Router} from "@angular/router";
import {IAccessData} from "./interfaces/access-data";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit{
  user!:IUser
  constructor(private authSvc:AuthService, private router:Router) {
  }
  ngOnInit() {
    this.authSvc.user$.subscribe((data:IAccessData|null): void =>{
      this.user = data?.user as IUser
      console.log(this.user)
      if(this.user)
      this.router.navigate(['/dashboard'])
    })
  }
}
