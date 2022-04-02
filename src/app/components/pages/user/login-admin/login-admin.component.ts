import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup} from '@angular/forms'
import { UsersService}  from 'src/app/services/users.service'
import { Router } from '@angular/router';
@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.css']
})
export class LoginAdminComponent implements OnInit {

  loginFormAdmin = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  })
  constructor(private _admin:UsersService, private _router:Router) { }

  ngOnInit(): void {
  }
  loginAdmin(){
    this._admin.loginAdmin(this.loginFormAdmin.value).subscribe(
      res=>{
        localStorage.setItem("newsTokenAdmin", res.data.token)
        this._admin.userData=res.data.user
      },
      (e)=>{},
      ()=>{

        this._admin.isLoggedIn = true //nav
        // this._router.navigate(["user/register"])
      }
    )
  }
}
