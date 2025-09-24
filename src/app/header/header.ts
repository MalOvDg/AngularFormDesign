import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  isResponsive = false;

  toggleNavbar(): void {
    this.isResponsive = !this.isResponsive;
  }

  closeMenu(): void {
    this.isResponsive = false;
  }
}
