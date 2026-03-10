import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  title = 'my-app';
  fullName = 'Pttuan';
  age =  10;

  sayHello(){
    console.log('hello');
    alert('hello' + this.fullName);
  }
}
