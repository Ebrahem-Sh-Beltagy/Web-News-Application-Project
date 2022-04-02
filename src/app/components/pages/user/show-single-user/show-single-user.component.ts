import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { ActivatedRoute } from '@angular/router';
// import { Tasks } from 'src/app/intefaces/tasks'
@Component({
  selector: 'app-show-single-user',
  templateUrl: './show-single-user.component.html',
  styleUrls: ['./show-single-user.component.css']
})
// export class ShowSingleUserComponent implements OnInit {
//   // isLoading= true
//   singleData :any = {
//     _id: "",
//     name: "",
//     age: "",
//     gender:"",
//     type:"",
//     email: "",
//     phone: "",
//     password: "",
//     tokens:""
// }
//   _router: any;
//   constructor(private _single:UsersService, _router:ActivatedRoute) { }

//   ngOnInit(): void {
//     this._single.getSingle(this._router.snapshot.params['id']).subscribe(
//       (result) => {
//         console.log(result)
//         this.singleData=result
//       },
//       ()=>{},
//       ()=>{
//         // this.isLoading=false
//       }
//     )
//   }
// }
export class ShowSingleUserComponent implements OnInit {

  singleObj:any ={}
  isLoading = true
  isFailed = false
  status = 0
  constructor(private _data:UsersService, private _route:ActivatedRoute) { }

  ngOnInit(): void {
    this._data.getSingle(this._route.snapshot.params["id"]).subscribe(
      (result) => {
        console.log(result.data)
        this.singleObj=result.data
      },
      ()=>{
        this.status=1
        this.isFailed=true
        console.log("not found")
      },
      ()=>{
        this.status=2
        this.isLoading=false
      }
    )

  }

}
