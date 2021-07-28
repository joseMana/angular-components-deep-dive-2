import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { BannerComponent } from './banner/banner.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { PopularItemsComponent } from './popular-items/popular-items.component';
import { MapLocationComponent } from './map-location/map-location.component';
import { PopularItemComponent } from './popular-item/popular-item.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    BannerComponent,
    NavMenuComponent,
    PopularItemsComponent,
    MapLocationComponent,
    PopularItemComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
