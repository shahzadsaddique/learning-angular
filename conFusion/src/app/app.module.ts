import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCardModule, MatGridListModule, MatListModule, MatToolbarModule} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
import 'hammerjs';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MenuComponent} from './menu/menu.component';
import {DishDetailsComponent} from './dish-details/dish-details.component';


import {DishService} from './services/dish.service';
import { HeaderComponent } from './header/header.component';
import { FoorterComponent } from './foorter/foorter.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    DishDetailsComponent,
    HeaderComponent,
    FoorterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    FlexLayoutModule,
    AppRoutingModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatButtonModule
  ],
  providers: [DishService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
