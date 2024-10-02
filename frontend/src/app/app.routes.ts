import { Routes } from '@angular/router';
import { HomeComponent } from '../page_components/home/home.component';
import { AboutComponent } from '../page_components/about/about.component';
import { PortfolioComponent } from '../page_components/portfolio/portfolio.component';
import { PostComponent } from '../page_components/post/post.component';
import { ContactComponent } from '../page_components/contact/contact.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'portfolio', component: PortfolioComponent },
    { path: 'blog', component: PostComponent },
    { path: 'contact', component: ContactComponent }
];
