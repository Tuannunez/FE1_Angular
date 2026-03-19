import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-story',
  imports: [ReactiveFormsModule],
  templateUrl: './add-story.html',
  styleUrl: './add-story.css',
})
export class AddStory {
  addForm: FormGroup;

  loading = false;
  error = '';
  success = '';

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.addForm = this.fb.group({
      title: ['', Validators.required], // validate
      author: [''],
      views: [0],
    });
  }

  submitForm() {
    if (this.addForm.invalid) {
      this.addForm.markAllAsTouched();
      return;
    }

    this.loading = true;
    this.error = '';
    this.success = '';
    const data = this.addForm.value;
    console.log(data);
    this.http.post('http://localhost:3000/stories', data).subscribe({
      next: () => {
        this.loading = false;
        this.success = 'Thêm truyện thành công';
        this.addForm.reset({ title: '', author: '', views: 0 });
      },
      error: () => {
        this.loading = false;
        this.error = 'Có lỗi xảy ra';
      },
    });
  }
}