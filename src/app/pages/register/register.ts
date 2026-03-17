import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
  registerForm: FormGroup;

  constructor(private fb: FormBuilder){
    this.registerForm = this.fb.group({
      username: ['', Validators.required], 
      email: ['', Validators.required], 
      password: ['',[ Validators.required, Validators.minLength(6)]], 
    });
  }
  submitForm(){
    if(this.registerForm.invalid){
      console.log("Form không hợp lệ");
      return;
    }

    console.log(this.registerForm.value);
    
  }
}
