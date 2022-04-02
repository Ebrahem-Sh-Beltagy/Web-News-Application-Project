import { Component, OnInit } from '@angular/core';
import { FormControl , FormGroup} from '@angular/forms';
import { UsersService } from 'src/app/services/users.service'
import { Router} from '@angular/router'
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  msg=""
  registerForm = new FormGroup({
    name:new FormControl(),
    email:new FormControl(),
    password:new FormControl(),
    age:new FormControl(),
    gender:new FormControl(),
    phone:new FormControl(),
    image :new FormControl()
  })
  constructor(private _regist:UsersService, private _router:Router) { }
  myFile:any
  ngOnInit(): void {
  }
register(){
  this._regist.register(this.registerForm.value).subscribe(
    res=>{

    },
    (e)=>{},
    ()=>{
      this.msg = "user added"
      // registerForm.resetForm()
      this._router.navigateByUrl("user/login")
    }
  )
}
onUploadFile(event:any){
  this.myFile =event.target.files[0]
}
handleUpload(){
  const myForm = new FormData()
  myForm.append("avatar", this.myFile, this.myFile.name) //avatart the name of post man field
  this._regist.uploadImage(myForm).subscribe(
    data=>{
      console.log(data)
      console.log("hi i'am gome from data fo subscribe of fun handleUpload")

    },
    (e)=>{console.log(e.message)},
    ()=>{
      console.log("success to upload this image")
    }
    )

}
}
