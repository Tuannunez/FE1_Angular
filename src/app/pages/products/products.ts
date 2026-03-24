import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';


export interface Product {
  id: number;
  title: string;
  author: string;
  views: number;
}

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products implements OnInit {

  products: Product[] = [];

  loading = false;
  error = '';

  deletingId: number | null = null;

  constructor(private http: HttpClient){}

  ngOnInit() {
    this.getProducts();
  }

  getProducts(){
    this.loading = true;
    this.error = '';

    this.http.get<Product[]>('http://localhost:3000/products').subscribe({
      next: (data) => {
        this.loading = false;
        this.products = data;
      },
      error: () => {
        this.loading = false;
        this.error = 'Không tải được dữ liệu';
      },
    });
  }
  deleteProduct(id: number){
    const confirmDelete = confirm('Bạn muốn xóa không');
    if(!confirmDelete) return;

    this.deletingId = id;

    this.http.delete(`http://localhost:3000/products/${id}`).subscribe({
      next: () => {
        this.products = this.products.filter(p => p.id !== id);
        this.deletingId = null;
        alert('Xóa thành công');
      },
      error: () => {
        this.deletingId = null;
        alert('Xóa thất bại');
      },
    });
  }
}