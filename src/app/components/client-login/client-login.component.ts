import { Component, OnInit } from '@angular/core';

import { NgForm, NgModel } from '@angular/forms';
import { Router } from '@angular/router';

import { ClientLoginService } from 'src/app/service/client-login.service';
import { ClientSignupService } from 'src/app/service/client-signup.service';


@Component({
  selector: 'app-client-login',
  templateUrl: './client-login.component.html',
  styleUrls: ['./client-login.component.css'],
  providers: [ClientLoginService]
})
export class ClientLoginComponent implements OnInit {

  constructor(
    public clientLoginService: ClientLoginService,
    private router: Router
  ) { 
  }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    this.clientLoginService.postClientLogin(form.value).subscribe((res) => {
      // this.resetForm(form);
      this.router.navigate(['/pandits']);
    })
  }
}
