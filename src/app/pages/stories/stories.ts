import { Component } from '@angular/core';

@Component({
  selector: 'app-stories',
  imports: [],
  templateUrl: './stories.html',
  styleUrl: './stories.css',
})
export class Stories {
  stories = [
    {
      title: "On Piece",
      author: "oda",
      views: 2000,
    },
    {
      title: 'Naruto',
      author: 'Kishimoto',
      views: 90000,
    },
    {
      title: 'Doraemon',
      author: 'Fujiko F Fujio',
      views: 70000,
    },
  ];
}
