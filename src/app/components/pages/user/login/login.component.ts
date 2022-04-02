import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup} from '@angular/forms'
import { UsersService}  from 'src/app/services/users.service'
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    email: new FormControl('ledo@ledo.com'),
    password: new FormControl('ledo')
  })
  get email(){ return this.loginForm.get("email")}
  get password(){ return this.loginForm.get("password")}

  constructor(private _user:UsersService, private _router:Router) { }

  ngOnInit(): void {
  }
  login(){
    this._user.loginUser(this.loginForm.value).subscribe(
      res=>{
        localStorage.setItem("newsToken", res.data.token)
        this._user.userData=res.data.user
      },
      (e)=>{},
      ()=>{
        this._user.isLoggedIn = true //nav
        this._router.navigate(["user/showAllUser"])
      }
    )
  }
}
