import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FriendsComponent } from './friends/friends.component';
import { ProductsComponent } from './products/products.component';
import { BindingExampleComponent } from './binding-example/binding-example.component';
import { FormsModule } from '@angular/forms';
import { DeptListComponent } from './dept-list/dept-list.component';
import { ProductsCategoryComponent } from './products-category/products-category.component';
import { EmployeesComponent } from './employees/employees.component';
import { FilterlistComponent } from './filterlist/filterlist.component';
import { UserComponent } from './user/user.component';
import { RatingPipe } from './rating.pipe';
import { RangePipe } from './range.pipe';
import { DirectivesProductsComponent } from './directives-products/directives-products.component';
import { FancyCardComponent } from './fancy-card/fancy-card.component';
import { TodolistComponent } from './todolist/todolist.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { EmpListComponent } from './emp-list/emp-list.component';
import { ModelFormExampleComponent } from './model-form-example/model-form-example.component';
import { CustomHttpInterceptor } from './httpinterceptor';
import { ReactiveFormsModule } from '@angular/forms';
import { BgcolordirectiveDirective } from './bgcolordirective.directive';
import { CustomAttributeDirectiveComponent } from './custom-attribute-directive/custom-attribute-directive.component';
import { AdminDirective } from './admin.directive';
import { CustomStructuralDirectiveComponent } from './custom-structural-directive/custom-structural-directive.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { Login1Component } from './login1/login1.component';
import { ContactComponent } from './contact/contact.component';
import { CategoryComponent } from './category/category.component';
import { CalculatorTestingComponent } from './calculator-testing/calculator-testing.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyMaterialModuleModule } from './my-material-module/my-material-module.module';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FriendsComponent,
    ProductsComponent,
    BindingExampleComponent,
    DeptListComponent,
    ProductsCategoryComponent,
    EmployeesComponent,
    FilterlistComponent,
    UserComponent,
    RatingPipe,
    RangePipe,
    DirectivesProductsComponent,
    FancyCardComponent,
    TodolistComponent,
    UserDetailsComponent,
    EmpListComponent,
    ModelFormExampleComponent,
    BgcolordirectiveDirective,
    CustomAttributeDirectiveComponent,
    AdminDirective,
    CustomStructuralDirectiveComponent,
    HomeComponent,
    AboutUsComponent,
    Login1Component,
    ContactComponent,
    CategoryComponent,
    CalculatorTestingComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MyMaterialModuleModule
  ],
  providers: [{provide : HTTP_INTERCEPTORS, useClass: CustomHttpInterceptor, multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
