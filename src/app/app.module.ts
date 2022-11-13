import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatModuleModule } from './mat-module/mat-module.module';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { CartPageComponent } from './components/cart-page/cart-page.component';
import { FoodPageComponent } from './components/food-page/food-page.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { TagsComponent } from './components/tags/tags.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    CartPageComponent,
    FoodPageComponent,
    ProductListComponent,
    TagsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatModuleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
