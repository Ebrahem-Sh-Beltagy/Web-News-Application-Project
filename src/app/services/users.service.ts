import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from "rxjs"
// import { Params } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  public userData:any = {name:"" , phone:'', password:"", email:"", age:0 , gender:''} || null
  public isLoggedIn = false

  host = "http://localhost:3000/user/"
  constructor(private _http:HttpClient) { }

  register(data:any):Observable<any>{
    return this._http.post("http://localhost:3000/user/register", data)
  }
  loginUser(data:any):Observable<any>{
    return this._http.post(`${this.host}login`, data)
  }
  loginAdmin(data:any):Observable<any>{
    return this._http.post(`${this.host}loginAdmin`, data)
  }
  profile():Observable<any>{
    return this._http.get(`${this.host}profile`) //get api from back End
  }
  showAllUser():Observable<any>{
    return this._http.get(`${this.host}showAllUser`) //get api from back End
  }
  getSingle(id:string):Observable<any>{
    return this._http.get(`http://localhost:3000/user/showSingleUser/${id}`)
  }
  deleteUser(id:string):Observable<any>{
    return this._http.delete(`${this.host}deletedUser/${id}`)
  }
  addPost(data:any):Observable<any>{
    return this._http.post(`${this.host}addPost`, data)
  }
  showAllPost():Observable<any>{
    return this._http.get('http://localhost:3000/post/showAllPost')
  }
  uploadImage(data:any):Observable<any>{
    return this._http.post('http://localhost:3000/user/profileImg',data)
  }
  logOut():Observable<any>{
    return this._http.post('http://localhost:3000/user/logOut',null)
  }

}
