import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './add-product.html',
  styleUrl: './add-product.css',
})
export class AddProduct {

  addForm: FormGroup;
  loading = false;
  error = '';

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router
  ){
    
    this.addForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(3)]],
      author: ['', Validators.required],
      views: [0]
    });
  }

 
  submitForm() {
    if (this.addForm.invalid) return;

    this.loading = true;
    this.error = '';

    const data = this.addForm.value;

    this.http.post('http://localhost:3000/products', data).subscribe({
      next: () => {
        this.loading = false;
        alert('Thêm thành công');

       
        this.addForm.reset({ views: 0 });

        
        this.router.navigate(['/']);
      },
      error: () => {
        this.loading = false;
        this.error = 'Thêm thất bại';
      }
    });
  }
}