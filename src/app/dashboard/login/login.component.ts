import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../../service/auth.service';
import {FormBuilder, Validators} from '@angular/forms';
import {TimeService} from '../../service/time.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  message?: string;

  loginForm = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
    role: ['', Validators.required],
  });

  currentTimePeriod?: string;

  constructor(public authService: AuthService,
              private timeService: TimeService,
              private router: Router,
              private fb: FormBuilder) {
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    console.log(this.loginForm.value);
    this.authService.login(this.loginForm.value).subscribe(
      isLoggedIn => {
        if (isLoggedIn) {
          this.message = undefined;
          this.getTime();
          sessionStorage.setItem('username', this.loginForm.controls.username.value);
        } else {
          this.message = 'Password not match or user not exist.';
        }
      }
    );
  }

  getTime(): void {
    this.timeService.getCurrentTimePeriod().subscribe(response =>
      this.currentTimePeriod = response
    );
  }

  logout(): void {
    this.authService.logOut();
    this.router.navigate(['']);
  }
}
