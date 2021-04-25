import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {AuthService} from '../../service/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  newUserForm = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
    role: ['', Validators.required],
  });

  constructor(
    private authService: AuthService,
    private fb: FormBuilder,
    private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    console.log(this.newUserForm.value);
    this.authService.addUser(this.newUserForm.value).subscribe(
      _ => this.router.navigate(['admin'])
    );
  }
}
