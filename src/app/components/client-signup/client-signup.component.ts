import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';


import { ClientSignupService } from 'src/app/service/client-signup.service';


@Component({
  selector: 'app-client-signup',
  templateUrl: './client-signup.component.html',
  styleUrls: ['./client-signup.component.css'],
  providers: [ClientSignupService]
})
export class ClientSignupComponent implements OnInit {

  constructor(
    public clientService: ClientSignupService
  ) { }

  ngOnInit(): void {
    this.resetForm();
  }


  // onSubmit(formValue: any){
  //   console.log(formValue)
  // }   
  resetForm(form?: NgForm) {
    if (form)
      form.reset();
    this.clientService.selectedClient = {
      _id: "",
      name: "",
      phone: "",
      state: "",
      city: "",
    }
  }
  onSubmit(form: NgForm) {
    this.clientService.postClientSignup(form.value).subscribe((res) => {
      this.resetForm(form);
      // alert ("This is an alert dialog box");
    })
  }

}
