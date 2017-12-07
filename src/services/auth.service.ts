import { Injectable } from "@angular/core";
import { Http }    from '@angular/http';
import { ApiService } from './api-service';

@Injectable()
export class AuthService {

  data : any;
  http : any;

  constructor(http: Http, private api: ApiService) {
    this.http = http;
    this.data = null;
  }

  login(names: string, lastnames: string, email: string, picture: string) {
    return this.api.post('/user/login', {
      nombres: names,
      apellidos: lastnames,
      correo: email,
      foto: picture
    });
  }

  handleError(error) {
    console.log(error);
    return error.json().message || 'Server error, please try again later';
  }
}