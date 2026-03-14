import { Routes } from '@angular/router';
import { Home } from './home/home';
import { About } from './about/about';
import { Contact } from './pages/contact/contact';
import { Products } from './pages/products/products';
import { Phone } from './pages/products/phone/phone';
import { Laptop } from './pages/products/laptop/laptop';
import { Stories } from './pages/stories/stories';

export const routes: Routes = [
    {
        path: 'home', component: Home 
    },
    {
        path: 'about', component: About ,
    },
    {
        path: 'contact', component: Contact ,
    },
    {
        path: 'products', component: Products,
         children: [
            { path: 'phone', component: Phone },
            { path: 'laptop', component: Laptop }
        ]
    },
    {
        path: 'stories', component: Stories,
    },
   

];
