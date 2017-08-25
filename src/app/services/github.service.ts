import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
  export class GithubService {
    private username = 'VladaProgramming';
    private client_id = '5bcdf2d5181f1b6cc346';
    private client_secret = '709b5f976e94965e3c0f42ec7872a680af057061';

    constructor(private _http:Http){
      console.log('Github service init...');
    }

    getUser() {
      return this._http.get('https://api.github.com/users/' +this.username)
        .map(res => res.json());
    }

    getRepos() {
      return this._http.get('https://api.github.com/users/' +this.username+'/repos')
        .map(res => res.json());
    }

    updateUsername(username:string) {
      this.username = username;
    }

  }
