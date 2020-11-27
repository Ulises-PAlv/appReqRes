import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

// ?? RxJS
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class UsersServiceService {

  constructor( private _http: HttpClient ) {
    console.log('UserService Loaded...');
  }

  getQuery(query: string) {
    const url = `https://reqres.in/api/${query}`;

    return this._http.get(url);
  }

  getUserList() {
    return this.getQuery(`users?page=1&per_page=12`).pipe(map( data => {
      return data['data'];
    }));
  }

  getUser(id: string) {
    return this.getQuery(`users/${id}`).pipe(map(data => {
      // console.log(data['data']);
      return data['data'];
    }));
  }

  deleteUser(id: string) {
    const url = `https://reqres.in/api//api/users/${id}`;
    this._http.delete(url);

    console.log("Eliminado usuario : " + id);
    
  }

  postUser(data: any) {
    return this._http.post('https://reqres.in/api/users', data);
  }

}