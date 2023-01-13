import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from 'src/app/login/login-page/login.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { Jwtresponse } from 'src/app/login/shared/jwtresponse';
import { LocationStrategy } from '@angular/common';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  jwtresponse: any = new Jwtresponse();
  loginForm: FormGroup;
  isSubmitted: boolean = false;

  constructor(private formBuillder: FormBuilder, public loginService: LoginService, private toastr: ToastrService, private router: Router, private location: LocationStrategy) {
    history.pushState(null, null, window.location.href);
    this.location.onPopState(() => {
      history.pushState(null, null, window.location.href);
    });
  }

  ngOnInit(): void {
    this.loginForm = this.formBuillder.group(
      {
        // emailId
        emailId: ['', [Validators.email, Validators.required, Validators.minLength(2)]],

        // password
        password: ['', [Validators.required]]
      }
    );


  }

  loginSubmit(): void {
    this.isSubmitted = true;
    console.log(this.loginForm.value);
    if (this.loginForm.valid) {
      this.getLoginDetails();
    }
    if (this.loginForm.invalid) {
      this.toastr.error("Invalid credentials");
    }
  }

  get formControls() {
    return this.loginForm.controls;
  }

  getLoginDetails() {
    this.loginService.getLoginCredentials(this.loginForm.value).subscribe(
      (result) => {
        //console.log("khbhkb");
        console.log(result);
        this.jwtresponse = result;
        if (this.jwtresponse.data.role === 1) {
          // this.loginService.isLogged = true;

          //session management - local storage
          localStorage.setItem('EMAIL', this.jwtresponse.data.emailId);
          sessionStorage.setItem('EMAIL', this.jwtresponse.data.emailId);

          localStorage.setItem('ACCESS_ROLE', this.jwtresponse.data.role);
          localStorage.setItem('ACCESS_TOKEN', this.jwtresponse.data.accessToken);

          this.router.navigateByUrl('/dashboard');

          //role 2 - purchase manager
        } else if (this.jwtresponse.data.role === 2) {
          // this.loginService.isLogged = true;

          localStorage.setItem('EMAIL', this.jwtresponse.data.emailId);
          sessionStorage.setItem('EMAIL', this.jwtresponse.data.emailId);

          localStorage.setItem('ACCESS_ROLE', this.jwtresponse.data.role);
          localStorage.setItem('ACCESS_TOKEN', this.jwtresponse.data.accessToken);
          this.router.navigateByUrl('/purchase');

        } else {
          // this.loginService.isLogged = false;
          this.toastr.error("Sorry Not authorized to access");
        }
        // console.log(result);
        // if(result.data == "User login failed"){
        //   this.toastr.error("Invalid credentials");
        // }else if(result.data.role == '1'){
        //   this.router.navigateByUrl('/dashboard');
        // }else if(result.data.role == '2'){
        //   this.router.navigateByUrl('/purchase');
        // }
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
