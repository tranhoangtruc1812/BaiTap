import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router'
import { AppComponent } from './app.component';
import { ListSVComponent } from './list-sv/list-sv.component';
import { StudentsComponent } from './students/students.component';
import {FormsModule} from '@angular/forms';
import { HinhchunhatComponent } from './hinhchunhat/hinhchunhat.component';
import { SinhvienComponent } from './sinhvien/sinhvien.component';
import { EmployerComponent } from './employer/employer.component';
import { BanhangComponent } from './banhang/banhang.component';

@NgModule({
  declarations: [
    AppComponent,
    ListSVComponent,
    StudentsComponent,
    HinhchunhatComponent,
    SinhvienComponent,
    EmployerComponent,
    BanhangComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {path:'', component:ListSVComponent},
      {path:'lab2', component:ListSVComponent},
      {path:'lab3', component: HinhchunhatComponent},
      {path:'lab3/hinhchunhat', component:HinhchunhatComponent},
      {path:'lab3/sinhvien', component:SinhvienComponent},
      {path:'lab3/tienthuong', component:EmployerComponent},
      {path:'lab3/banhang', component:BanhangComponent},
      {path:'lab2/sinhvien/:id', component:StudentsComponent},
      {path:'**',redirectTo: 'home', pathMatch: 'full' },

      
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
