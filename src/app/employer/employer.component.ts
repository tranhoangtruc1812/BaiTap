import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employer',
  templateUrl: './employer.component.html',
  styleUrls: ['./employer.component.css']
})
export class EmployerComponent implements OnInit {
  work ={
    name: null,
    gender: null,
    luong: null,
    rate:null
  } 
  
    constructor() { }
  
    ngOnInit() {
    }
    list = [
      {
        age: 'dưới 25 tuổi',
        rate: 0.07
      },
      {
        age: 'từ 25 đến 40 tuổi',
        rate: 0.1
      },
      {
        age: 'trên 40 tuổi',
        rate: 0.15  
      }
    ]
    tienthuong(){
      let luong
      if(this.work.luong >= 2000000){
       luong =  this.work.rate * this.work.luong }
      if(this.work.gender === 'Nữ')
      luong += 200000;
      return luong
    }
  
}
