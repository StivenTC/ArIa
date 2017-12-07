import { Injectable } from '@angular/core';
import { UserModel } from '../models/user.model'


@Injectable()
export class TokenService {

  getToken(): String {
    return window.localStorage['token'];
  }

  saveToken(token: String) {
    window.localStorage['token'] = token;
  }

  destroyToken() {
    window.localStorage.removeItem('token');
  }

// Decodifica el Token y retorna el Payload como tipo usuario
  getPayload(): UserModel {
  	let token = this.getToken();
    if (token && 3 === token.split(".").length) {
		return(JSON.parse(decodeURIComponent(
			window.atob(token.split(".")[1].replace("-", "+").replace("_", "/"))
		)));
    }
  }

// Verifica la vigencia del Token
  verify(): boolean {
    let token = this.getPayload();
    return token && token['exp'] ? Math.round((new Date).getTime() / 1E3) <= token['exp'] ? true : false : (
      console.log("Las credenciales de acceso no son válidas"), false
    );
  }

}