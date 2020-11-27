import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { LoadingComponent } from './components/shared/loading/loading.component';
import { HomeComponent } from './components/home/home.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserSearchComponent } from './components/user-search/user-search.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { DeleteUserComponent } from './components/delete-user/delete-user.component';

// !! Importe para hacer un HTTP Request
import { HttpClientModule } from '@angular/common/http';
  // Hacer funcionar nuestras rutas
  import {  RouterModule } from '@angular/router';
  import { ROUTES } from './app.routes';
import { CardUsrComponent } from './components/shared/card-usr/card-usr.component';

// ?? Reactive forms
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    LoadingComponent,
    HomeComponent,
    UserListComponent,
    UserSearchComponent,
    AddUserComponent,
    DeleteUserComponent,
    CardUsrComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
