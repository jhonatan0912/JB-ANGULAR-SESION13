import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { RegisterSuccesDialogComponent } from '../register-succes-dialog/register-succes-dialog.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  registerForm: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    userName: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });

  constructor(public fb: FormBuilder, public dialog: MatDialog, public router: Router) { }

  ngOnInit(): void {
  }

  register() {
    if (this.registerForm.status != "INVALID") {
      this.dialog.open(RegisterSuccesDialogComponent)
    }
  }

  logout() {
    this.router.navigate(['/'])
  }
}
