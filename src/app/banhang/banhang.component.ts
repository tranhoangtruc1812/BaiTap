import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banhang',
  templateUrl: './banhang.component.html',
  styleUrls: ['./banhang.component.css']
})
export class BanhangComponent implements OnInit {
  list = [
    { select: '',
      name: 'Nước ngọt',
      price: 10000,
      soluong: 0,
      thanhtien: 0
    },
    { select: '',
      name: 'Cà phê đen',
      price: 12000,
      soluong: 0,
      thanhtien: 0
    },

    {
      select: '',
      name: 'Thuốc lá',
      price: 18000,
      soluong: 0,
      thanhtien: 0
    }
  ]
  constructor() { }

  ngOnInit() {
  }
  ThanhTien(a,b) {
     return a*b

  }
  TongTien(){
    let s =0;
    this.list.forEach(element => {
      if(element.select != "")
      {
      s = s + this.ThanhTien(element.soluong,element.price)
      }
    });
    return s;
  }
 
}
