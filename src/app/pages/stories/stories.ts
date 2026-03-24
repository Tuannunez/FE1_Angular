import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stories',
  imports: [],
  templateUrl: './stories.html',
  styleUrl: './stories.css',
})
export class Stories implements OnInit{
  stories: any[] = [];

  loading = false;
  error ='';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getStories();
  }

  getStories(){
    this.loading = true;
    this.error='';

    this.http.get<any[]>('http://localhost:3000/stories').subscribe({
      next: (data) => {
        this.loading = false;
        this.stories = data;
      },
      error: () => {
        this.loading = false;
        this.error = 'Ko tải dữ liệu';
      },
    });
  }

  deleteStory(id: number) {
    const confirmFelete = confirm('Bạn có chắc muốn xóa ko');
    if(!confirmFelete) return;

    this.http.delete(`http://localhost:3000/stories/${id}`).subscribe({
      next: () => {
        this.stories = this.stories.filter((story) => story.id !== id);
        alert('Xóa tc');
      },
      error: () => {
        alert('Xóa tb');
      },
    });
  }
}
