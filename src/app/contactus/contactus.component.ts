import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ConfigService } from '../config.service';
@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {

  contactusForm:FormGroup;
  sending:boolean;
  constructor(private fb:FormBuilder,private router:Router,private contactService: ConfigService) { }

  ngOnInit() {
    this.contactusForm = this.fb.group({
      'email':[null,Validators.required],
      'firstName':[null,Validators.required],
      'lastName':[null,Validators.required],
       'password':[null,Validators.required]
    });
    this.sending=false;
  }
 
  sendMessage(formData: NgForm) {
    this.sending = true;
    console.log(formData);
    this.contactService.sendMessage(formData).subscribe(
      data => console.log(data)
    );

    setTimeout(() => {
      this.sending = false;
      this.cancelForm();
    }, 1000);
  }
  subscribe(formData: NgForm) {
    this.sending = true;
    console.log(formData);
    setTimeout(() => {
      this.sending = false;
      this.cancelForm();
    }, 1000);
  }

  cancel() {
    this.cancelForm();
  }

  cancelForm() {
    this.router.navigate([{outlets: { popup: null }}] );
  }
}
