import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule, Routes } from '@angular/router';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserItemComponent } from './user-item/user-item.component';
import { UserService } from './services/user.service';
import {HttpClientModule, HttpClient } from '@angular/common/http';
import { UserEditComponent } from './user-edit/user-edit.component';
import {MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const routes:Routes=[
  {path:'home',component:HomeComponent},
  {path:'users',component:UserManagementComponent},
  {path:'about',component:AboutusComponent},
  {path:'contact',component:ContactusComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutusComponent,
    ContactusComponent,
    UserManagementComponent,
    UserListComponent,
    UserItemComponent,
    UserEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    MatDialogModule,
    ],
  providers: [
    HashLocationStrategy,
    UserService,
    HttpClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
