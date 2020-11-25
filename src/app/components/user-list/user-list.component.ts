import { Component, OnInit } from '@angular/core';
import { UsersServiceService } from 'src/app/services/users-service.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})

export class UserListComponent implements OnInit {
  usersInfo: any = [];
  error: boolean;
  errorMsg: string;

  constructor( private userServ: UsersServiceService ) {
    this.userServ.getUserList().subscribe( (data: any) => {
      this.usersInfo = data;
      console.log(this.usersInfo);
    }, (errorService) => {
      this.error = true;
      this.errorMsg = errorService.error.error.mesagge; 
    });
  }
  

  ngOnInit(): void {
  }

}
