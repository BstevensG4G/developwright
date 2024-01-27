import { Component } from '@angular/core';

@Component({
  selector: 'Banner',
  standalone: true,
  imports: [],
  // templateUrl: './header.html',
  template: `
  <header>
    <div>
    <img id="logo" src="../../assets/dwLogoLg.png" alt="DevelopWright Logo" />
    </div> 
    <div class="bannerText">
      <h1>DevelopWright</h1>
      <h3>Software Development Services</h3>               
    </div>
  </header>`,
  styleUrl: './header.css'
})
export class Banner {

}
