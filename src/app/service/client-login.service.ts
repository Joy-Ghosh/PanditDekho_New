import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ClientSignup } from '../model/client-signup.model';
import { ClientLogin } from '../model/client-login';

@Injectable({
  providedIn: 'root'
})
export class ClientLoginService {
  selectedClient!: ClientLogin;
  clients!: ClientLogin[];
  readonly baseURL = 'http://localhost:4100/clients/login';

  constructor(private http: HttpClient) { }

  postClientLogin(client: ClientLogin) {
    return this.http.post(this.baseURL, client);
  }
}
