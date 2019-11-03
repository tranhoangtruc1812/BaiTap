import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'shop';  
  constructor(private http:HttpClient) { }
  url='./assets/db/categories.json';
  categories: any;
  ngOnInit() {
    this.getAllproducts().subscribe(data =>{
      this.categories = data;
    })
  }
  getAllproducts(){
    return this.http.get(this.url);
  }
  
}
