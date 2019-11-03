import { Component, OnInit } from '@angular/core';
import {CustommerService} from '../custommer.service'
import {CartseviceService} from '../cartsevice.service'
@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  constructor(private customer : CustommerService, private cart:CartseviceService) { }
  info
  mycart
  customers
  
  ngOnInit() {
    this.customers = this. customer.getItems();
    this.info=this.customers[0];
    this.mycart = this.cart.getItems()
  }
  
  ship  = 40;
  subtotal(){
    let total =0;
    this.mycart.forEach(element => {
      total += element.yourprice
    });
    return total
  }
  yourprice(id){
   let  price;
    this.mycart.forEach(e =>{
        if(e.id === id){
          e.yourprice = (e.price - e.price*e.discount/100) *e.quantity;
          price = e.yourprice
        }
      })
      return price
     
  } 
  vat(){
   return this.subtotal()*0.1;
  }
  total(){
    return this.subtotal() +this.vat()+ this.ship;    
  }
}
