import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
// recipe page components 
import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './users/recipes.component';
import { UserDetailComponent } from './users/user-detail/user-detail.component';
import { SquaaadListComponent } from './member-list/squaaad-list.component';
import { RecipeItemComponent } from './users/user-list/recipe-item/recipe-item.component';
import { UserListComponent } from './users/user-list/user-list.component';
import { SquaaadEditComponent } from './member-list/squaaad-edit/squaaad-edit.component';
import { CockpitComponent } from './cockpit/cockpit.component';
import { ServerElementComponent } from './server-element/server-element.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { AlertButtonComponent } from './alert-button/alert-button.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    UserDetailComponent,
    RecipeItemComponent,
    UserListComponent,
    SquaaadListComponent,
    SquaaadEditComponent,
    CockpitComponent,
    ServerElementComponent,
    ServerComponent,
    ServersComponent,
    AlertButtonComponent
  ],
  imports: [
  BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
