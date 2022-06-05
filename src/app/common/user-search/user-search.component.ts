import { User } from './../../models/user';
import { SearchService } from './../../services/search.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.css']
})
export class UserSearchComponent implements OnInit {

  users:User[]
  username:string


  constructor(private searchService:SearchService) { }

  ngOnInit(): void {
    this.getUserInf();
  }


  getUserInf () {
    let list = []
    this.searchService.getUserSearch(this.username).subscribe(data =>{

      list.push(data)
    })
    this.users=list
  }


}
