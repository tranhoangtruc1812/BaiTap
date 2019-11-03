import { Component, OnInit } from '@angular/core';
import {CartseviceService} from '../cartsevice.service'
import {CustommerService} from '../custommer.service'

@Component({
  selector: 'app-yourcart',
  templateUrl: './yourcart.component.html',
  styleUrls: ['./yourcart.component.css']
})
export class YourcartComponent implements OnInit {
  mycart
  constructor(private cart:CartseviceService, private custom: CustommerService) { }
  info ={
    name:"",
    address:'',
    email:'',
    phone:''
  }
  ngOnInit() {
    this.mycart = this.cart.getItems();
    
  }
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
  addToCart(){
    let app = Object.assign(this.info)
    this.custom.clearCart();
    this.custom.addToCart(app);
  }

  
}
