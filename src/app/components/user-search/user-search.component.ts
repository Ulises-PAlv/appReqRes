import { Component, OnInit } from '@angular/core';
import { UsersServiceService } from 'src/app/services/users-service.service';

@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.css']
})

export class UserSearchComponent implements OnInit {
  results: any = [];
  searching: number;
  error: boolean;
  errorMsj: string;
  nameAlert: string;

  constructor( private userService: UsersServiceService) {
    this.searching = 0;
  }

  search(key) {
    if(key === '') return this.results = [];

    this.userService.getUser( key.toString() ).subscribe((data:any) => {
      this.results = data;
      this.searching = 2;
    }, (errorService) => {
      this.error = true;
      this.errorMsj = errorService.error.error.message;
    });
  }

  delete(id, name) {
    this.userService.deleteUser(id.toString());
    this.searching = 1;
    this.nameAlert = name;
  }

  ngOnInit(): void {
  }

}
