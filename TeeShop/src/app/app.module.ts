import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { ColorComponent } from './color/color.component';
import { SizeComponent } from './size/size.component';
import { DesignComponent } from './design/design.component';


@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CartComponent,
    ColorComponent,
    SizeComponent,
    DesignComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
      HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
        { path: 'cart', component: CartComponent },
        { path: 'size', component: SizeComponent },
        { path: 'design', component: DesignComponent },
        { path: 'color', component: ColorComponent }
    ])
  ],
  providers: [ColorComponent, HomeComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
