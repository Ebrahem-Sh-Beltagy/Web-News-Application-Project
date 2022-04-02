import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { ActivatedRoute } from '@angular/router';
// import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-show-all-user',
  templateUrl: './show-all-user.component.html',
  styleUrls: ['./show-all-user.component.css']
})
export class ShowAllUserComponent implements OnInit {
  allUserData:any[] =[]
  isLoading =true
  constructor(private _data:UsersService, _router:ActivatedRoute) { }


  ngOnInit(): void {
    this._data.showAllUser().subscribe(
      (result)=>{
      console.log(result)
      this.allUserData = result.data //we put the res.'data' because api contain []
      console.log(this.isLoading);
      },
      ()=>{"error"},
      ()=>{
        this.isLoading= false
        console.log("hi your allUser fetched");

      }
    )
  }
  handleDelete(userId:string, index:number){
    this._data.deleteUser(userId).subscribe(
      (res)=>{

        console.log(res +"hhhhh")
      },
      ()=>{console.log("falser delete");
      console.log(this.allUserData)
      },
      ()=>{

        this.allUserData.splice(index,1)
        console.log("welcome req your done")
      }
    )
  }

}
