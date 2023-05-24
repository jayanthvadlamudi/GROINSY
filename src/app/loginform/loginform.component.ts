import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { GROINCYService } from '../groincy.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css']
})
export class LOGINFORMComponent {

  constructor( private apiservice: GROINCYService,public Dashboard:Router){}



  username : string="";
  password : string="";


  // email form
  email = new FormControl('', [Validators.required, Validators.email]);
  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }
    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

// password form
hide = true;

// for email and password
passemail = new FormGroup({
  email : new FormControl('',Validators.email),
  password : new FormControl('',Validators.required),
  Number : new FormControl ('',Validators.required),
  
})

pass(){
  
  console.log(this.passemail.value);
  console.log(this.passemail.get('Number')?.setValue('9494995388'));
  
  this.apiservice.getdata(this.passemail.value);
}



 


}
