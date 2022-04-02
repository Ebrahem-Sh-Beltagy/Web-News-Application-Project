import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-show-all-post',
  templateUrl: './show-all-post.component.html',
  styleUrls: ['./show-all-post.component.css']
})
export class ShowAllPostComponent implements OnInit {
  // allPostData :any[] =[]
  // isLoading =true
  constructor() { }

  ngOnInit(): void {
    // this._data.showAllPost().subscribe(
    //   (result)=>{
    //   console.log(result)
    //   this.allPostData = result.data //we put the res.'data' because api contain []
    //   console.log(this.isLoading);
    //   },
    //   ()=>{"error"},
    //   ()=>{
    //     this.isLoading= false
    //     console.log("hi your allUser fetched");

    //   }
    // )
  }
  // handleDelete(userId:string, index:number){
  //   this._data.deleteUser(userId).subscribe(
  //     (res)=>{

  //       console.log(res +"hhhhh")
  //     },
  //     ()=>{console.log("falser delete");
  //     console.log(this.allPostData)
  //     },
  //     ()=>{

  //       this.allPostData.splice(index,1)
  //       console.log("welcome req your done")
  //     }
  //   )
  // }

}
