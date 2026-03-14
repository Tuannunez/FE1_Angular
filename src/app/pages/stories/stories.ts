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
    title: "One Piece",
    author: "Oda",
    views: 2000,
    year: 1997,
    category: "Adventure",
    image: "https://tse3.mm.bing.net/th?id=OIF.9A1wG%2b0LQXypG15Ke%2fvk0A&pid=Api&h=220&P=0"
  },
  {
    title: "Naruto",
    author: "Kishimoto",
    views: 90000,
    year: 1999,
    category: "Action",
    image: "https://upload.wikimedia.org/wikipedia/en/9/94/NarutoCoverTankobon1.jpg"
  },
  {
    title: "Doraemon",
    author: "Fujiko F Fujio",
    views: 70000,
    year: 1969,
    category: "Comedy",
    image: "https://tse1.mm.bing.net/th/id/OIP.VS4-MfCl6SZ6p2vyX1eNRwHaEK?pid=Api&h=220&P=0"
  },
  {
    title: "Dragon Ball",
    author: "Akira Toriyama",
    views: 70000,
    year: 1984,
    category: "Action",
    image: "https://tse2.mm.bing.net/th/id/OIP.9AiK59Xo4o7hdIGZXcrQPAHaEK?pid=Api&h=220&P=0"
  },
  {
    title: "Attack On Titan",
    author: "Hajime Isayama",
    views: 85000,
    year: 2009,
    category: "Dark Fantasy",
    image: "https://tse3.mm.bing.net/th/id/OIP.OytRmK8q_AEPWI8E06Qe3gHaEo?pid=Api&h=220&P=0"
  },
  {
    title: "Bleach",
    author: "Tite Kubo",
    views: 80000,
    year: 2001,
    category: "Supernatural",
    image: "https://upload.wikimedia.org/wikipedia/en/7/72/Bleachanime.png"
  }
];
}
