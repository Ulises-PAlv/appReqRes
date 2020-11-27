import { Routes } from '@angular/router';

// Components
import { AddUserComponent } from './components/add-user/add-user.component';
import { DeleteUserComponent } from './components/delete-user/delete-user.component';
import { HomeComponent } from './components/home/home.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserSearchComponent } from './components/user-search/user-search.component';

// ?? Arreglo de rutas (path's)

export const ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'userList', component: UserListComponent },
    { path: 'user', component: UserSearchComponent },
    { path: 'addUser', component: AddUserComponent },
    { path: 'delUser', component: DeleteUserComponent },
    { path: '**', pathMatch: 'full', component: HomeComponent }
];