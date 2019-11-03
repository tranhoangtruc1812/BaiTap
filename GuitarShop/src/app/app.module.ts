import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router'
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {FormsModule} from '@angular/forms'
import {HttpClientModule} from '@angular/common/http';
import { DetailComponent } from './detail/detail.component';
import { YourcartComponent } from './yourcart/yourcart.component';
import { OrderComponent } from './order/order.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DetailComponent,
    YourcartComponent,
    OrderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(
      [
        {path:'', component: HomeComponent},
        {path:'home', component: HomeComponent},
        {path:'home/:sanpham', component: DetailComponent},
        {path:'cart', component: YourcartComponent},
        {path:'account', component: OrderComponent}
      ]
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
