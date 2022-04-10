import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/toPromise';

import { ClientSignup } from '../model/client-signup.model';

@Injectable({
  providedIn: 'root'
})
export class ClientSignupService {
  selectedClient!: ClientSignup;
  clients!: ClientSignup[];
  readonly baseURL = 'http://localhost:4100/clients';

  constructor(private http: HttpClient) { }

  postClientSignup(client: ClientSignup) {
    return this.http.post(this.baseURL, client);
  }
}
