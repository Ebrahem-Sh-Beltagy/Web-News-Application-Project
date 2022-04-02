import { Component } from '@angular/core';
import { UsersService } from './services/users.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private _user:UsersService){
    this._user.profile().subscribe(
      res=>{
        this._user.userData = res.data
      },
      (e)=>{},
      ()=>{
        this._user.isLoggedIn= true
      }
    )
  }
}
