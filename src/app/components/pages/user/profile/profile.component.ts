import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { Router } from '@angular/router';
// import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profData:any = {}
  isLoading = true
  isFailed = false
  status = 0
  constructor(private _data:UsersService, private _route:Router) { }

  ngOnInit(): void {
    this._data.profile().subscribe(
      res=>{
        this.profData = res.data
        console.log(this.profData);


      },

      (e)=> {

        this._route.navigate(['user/login'])
        console.log("hi error to get api profile redirect login token");

      },
      ()=>{
        this.status=2
        this.isLoading=false
      }

    )

    }

}
