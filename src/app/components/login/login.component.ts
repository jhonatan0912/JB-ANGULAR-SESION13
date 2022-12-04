import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  statusUsername: String = '';
  statusPassword: String = '';

  loginForm: FormGroup = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });

  constructor(public fb: FormBuilder, public dialog: MatDialog, public router: Router) { }

  ngOnInit(): void {

  }

  login() {
    if (this.loginForm.status != "INVALID") {
      // console.log(this.loginForm);
      this.router.navigate(['/register'])
    } else {
      this.dialog.open(DialogComponent)
    }
  }

}
