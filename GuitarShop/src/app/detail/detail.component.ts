import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { ActivatedRoute } from '@angular/router'
import {CartseviceService} from '../cartsevice.service'
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  constructor(private http: HttpClient, private route: ActivatedRoute, private cart: CartseviceService) { }
  id
  discount = 30;
  quantity =1;
  url = './assets/db/guitar.json'
  detail: any;
  pr;
  feature;
  ngOnInit() {

    this.route.paramMap.subscribe(params => {
      this.id = +params.get('sanpham');
    });
    this.getall().subscribe(data => {
      this.detail = data;
      this.pr = this.detail.find(p => p.id === this.id)
      this.feature = this.pr.newfeature;
    })


  }

  getall() {
    return this.http.get(this.url)

  }
  yourprice;
  yourPrice() { return this.yourprice =(this.pr.price - this.pr.price*this.discount/100)*this.quantity}
  addToCart(){
    let app =Object.assign(this.pr,{"quantity":this.quantity},{"yourprice":this.yourprice},{"discount":this.discount})
    this.cart.addToCart(app);
  }
}
