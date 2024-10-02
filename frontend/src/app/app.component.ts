import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Banner } from '../header/header';
import { Navbar } from '../navbar/navbar';
import { Foot } from '../footer/footer';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Banner, Navbar, Foot],
  templateUrl: 'app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend';
}
