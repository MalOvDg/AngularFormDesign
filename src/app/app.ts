import { Component, signal } from '@angular/core';
import { RouterOutlet} from '@angular/router';
import { Header } from './header/header';
import { Footer } from './footer/footer';  
//Navigation is inside Header component 

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    Header,
    Footer, 
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-form');
}
