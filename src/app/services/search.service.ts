import { User } from 'src/app/models/user';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private httpClient:HttpClient) { }

  getUserSearch(val:string):Observable<User>{

    return this.httpClient.get<User>(`https://api.github.com/users/${val}`)

  }

}
