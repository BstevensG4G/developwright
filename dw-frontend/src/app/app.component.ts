import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Banner } from './header/header';
import { Navbar } from './navbar/navbar';
import { Foot } from './footer/footer';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Banner, Navbar, Foot],
  template: `
  <Banner></Banner>
  <Navbar></Navbar>
  <main>
  <router-outlet></router-outlet>
  <Foot></Foot>
  </main>
  `,
  styleUrl: './app.css',
})
export class AppComponent {
  title = 'dw-frontend';
}
