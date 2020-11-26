import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';

import { StoreModule } from '@ngrx/store'
import { reducer as AuthReducer} from './store/ngrx'

import { MovieCardComponent } from './movie-list/movie-card/movie-card.component';
import { MovieFilterComponent } from './movie-list/movie-filter/movie-filter.component';
import { NavigationComponent } from './navigation/navigation.component';
import { MovieComponent } from './movie/movie.component';

@NgModule({
  declarations: [
    AppComponent,    
    routingComponents,
    MovieCardComponent,
    MovieFilterComponent,
    NavigationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    StoreModule.forRoot({AuthReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
