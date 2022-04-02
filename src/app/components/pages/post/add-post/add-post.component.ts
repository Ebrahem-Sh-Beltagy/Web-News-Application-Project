import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {
  _router:any
  msg=""
  // addPostForm = new FormGroup({
  //   postType:new FormControl(),
  //   title:new FormControl(),
  //   description:new FormControl(),
  //   image:new FormControl(),
  //   coments:new FormControl(),
  //   // gender:new FormControl(),

  // })
  constructor() { }
  myFile:any
  ngOnInit(): void {
  }
    // addPost(){
    //   this._data.addPost(this.addPostForm.value).subscribe(
    //     res=>{

    //     },
    //     (e)=>{e.message},
    //     ()=>{
    //       this.msg = "user added"
    //      // registerForm.resetForm()
    //       this._router.navigateByUrl("post/showAllPost")
    //     }
    //   )
    // }
    // onUploadFile(event:any){
    //   this.myFile =event.target.files[0]
    // }
    // handleUpload(){
    //   const myForm = new FormData()
    //   myForm.append("avatar", this.myFile, this.myFile.name) //avatart the name of post man field
    //   this._data.uploadImage(myForm).subscribe(
    //     data=>{
    //       console.log(data)
    //       console.log("hi i'am gome from data fo subscribe of fun handleUpload")

    //     },
    //     (e)=>{console.log(e.message)},
    //     ()=>{
    //       console.log("success to upload this image")
    //     }
    //     )

    // }

}
