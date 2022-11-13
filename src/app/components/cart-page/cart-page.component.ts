import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/app/models/cart';
import { CartItem } from 'src/app/models/cartItem';
import { CartService } from 'src/app/services/cart.service';


@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {
  cart!:Cart;
  constructor(private cartSvc:CartService) { this.setCart();}

  ngOnInit(): void {
  }
  setCart(){
    this.cart = this.cartSvc.getCart();
    console.log( this.cartSvc.getCart());
   }
   removeFromCart(cartItem:CartItem){
    this.cartSvc.removeFormCart(cartItem.food.id);
    this.setCart();// instance load cart data after remove any item from cart
  }
  changeQuantity(cartItem:CartItem, quantityInString:string){
    const quantity = parseInt(quantityInString);
    this.cartSvc.changeQuantity(cartItem.food.id,quantity);
    this.setCart();// instance load cart data after changing any item quantity
  }
}
