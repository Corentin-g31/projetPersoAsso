/* tslint:disable:typedef */
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  form: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.form = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  login(): void {
    const val = this.form.value;

    if (val.username && val.password) {
      this.authService.login(val.username, val.password)

        .subscribe(
          () => {
            this.authService.isAuth = true;
            this.router.navigate(['/adminMembers']);
          }
        );
    }
  }

  ngOnInit(): void {
  }
}
