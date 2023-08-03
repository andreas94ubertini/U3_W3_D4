import {Component, OnInit} from '@angular/core';
import {AuthService} from "../auth/auth.service";
import {Router} from "@angular/router";
import {IUser} from "../auth/interfaces/user";

@Component({
  selector: 'app-allusers',
  templateUrl: './allusers.component.html',
  styleUrls: ['./allusers.component.scss']
})
export class AllusersComponent implements OnInit{
  allUser!:IUser[]
  constructor(private authSvc:AuthService, private router:Router) {
  }
  ngOnInit() {
    this.authSvc.getAll().subscribe(data=> this.allUser = data)

  }

}
