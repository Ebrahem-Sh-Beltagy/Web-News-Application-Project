import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { Router } from '@angular/router';
// import { UsersService } from 'src/app/services/users.service';
// import { Router } from 'express';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public _user:UsersService, private _router:Router) { }

  ngOnInit(): void {
  }
  logMeout(){
    this._user.logOut().subscribe(
      res=>{console.log(res)},
      ()=>{},
      ()=>{
        localStorage.removeItem("newsToken")
        this._user.isLoggedIn = false
        this._user.userData={name: ""}
        this._router.navigateByUrl("/user/login")
      }
    )
  }

}
