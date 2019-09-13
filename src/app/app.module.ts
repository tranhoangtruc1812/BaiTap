import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router'
import { AppComponent } from './app.component';
import { ListSVComponent } from './list-sv/list-sv.component';
import { StudentsComponent } from './students/students.component';

@NgModule({
  declarations: [
    AppComponent,
    ListSVComponent,
    StudentsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path:'', component:ListSVComponent},
      {path:'home', component:ListSVComponent},
      {path:'home/sinhvien/:id', component:StudentsComponent},
      {path:'**',redirectTo: 'home', pathMatch: 'full' },

      
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
