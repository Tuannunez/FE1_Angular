import { Component } from '@angular/core';
import {  ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-product',
  imports: [ReactiveFormsModule],
  templateUrl: './add-product.html',
  styleUrl: './add-product.css',
})
export class AddProduct {
  addForm: FormGroup;

  constructor(private fb: FormBuilder){
    this.addForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      price: ['',[ Validators.required, Validators.min(1)]],
      category: [''],
    });
  }
  submitForm(){
      if(this.addForm.invalid){
      console.log("Form không hợp lệ");
      return;
    }
    console.log(this.addForm.value);;
    
  }
}
