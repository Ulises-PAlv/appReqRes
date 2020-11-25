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

  queryReqRes(query: string) {
    const url = `https://reqres.in/api/${query}`;

    return this._http.get(url);
  }

  getUserList() {
    return this.queryReqRes(`users?page=1&per_page=12`).pipe(map( data => {
      return data['data'];
    }));
  }
}