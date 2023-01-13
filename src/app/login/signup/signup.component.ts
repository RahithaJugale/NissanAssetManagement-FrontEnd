import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SignupService } from 'src/app/login/signup/shared/signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  isSubmitted:boolean = false;
  addUserForm: FormGroup;
  constructor(private formBuilder:FormBuilder, public signupService:SignupService, private router:Router, private toastr:ToastrService) { }

  ngOnInit(): void {
    this.addUserForm = this.formBuilder.group(
      {
        // emailId
        emailId:['', [Validators.email, Validators.required, Validators.minLength(2)]],

        // password
        password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(15)]],

        //typeId
        typeId: ['', [Validators.required]],

        //firstName
        firstName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(25), Validators.pattern("[A-Za-z ]+")]],

        //lastName
        lastName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(25), Validators.pattern("[A-Za-z ]+")]],

        //age
        age: ['', [Validators.required, Validators.min(25), Validators.max(45)]],

        //gender
        gender: ['', [Validators.required]],

        //address
        address: ['', [Validators.required,Validators.minLength(3), Validators.maxLength(70)]],

        //phoneNumber
        phoneNumber: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],

        //isActive
        isActive: [false]
      }
    )
  }

  submitDetails(){
    this.isSubmitted=true;
    console.log(this.addUserForm.value);
      if(this.addUserForm.invalid){
        this.toastr.error("Please check details again");
      }
      if(this.addUserForm.valid){
        console.log("Hello");
        this.signupService.signUp(this.addUserForm.value).subscribe(
          (result) => {
            console.log(result);
            this.toastr.success("User added successfully");
            this.router.navigateByUrl('/dashboard');
          },
          (error) => {
            console.log(error);
            this.toastr.error("Error");
          }
        )
      }
  }

  get formControls(){
    return this.addUserForm.controls;
  }
}
