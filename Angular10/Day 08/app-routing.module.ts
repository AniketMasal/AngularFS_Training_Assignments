import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { CategoryComponent } from './category/category.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { Login1Component } from './login1/login1.component';
import { ProductsComponent } from './products/products.component';


const routes: Routes = [
  { path : "", component: HomeComponent  },
  { path : "Categories", component: CategoryComponent, canActivate : []  },
  { path : "aboutus", component: AboutUsComponent  },
  { path : "login", component: Login1Component },
  { path : "contact", component: ContactComponent },
  {path : "details/:category" , component:ProductsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
