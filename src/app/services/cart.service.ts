import { Injectable } from '@angular/core';
import { Cart } from 'src/app/models/cart';
import { CartItem } from 'src/app/models/cartItem';
import { Foods } from 'src/app/models/food';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }
  private cart: Cart = new Cart();
  // method to add to cart 
  addToCart(food:Foods):void{
    let cartItem = this.cart.items.find(item => item.food.id === food.id);
    if(cartItem){
      this.changeQuantity(food.id, cartItem.quantity + 1);
      return;
    }
    
    this.cart.items.push(new CartItem(food))
  }
  // when same item is added to cart, only change the quantity 
  changeQuantity( foodId: number ,quantity: number): void{
    let cartItem = this.cart.items.find(item => item.food.id === foodId);
    if(!cartItem) return;
    cartItem.quantity = quantity;
  }

  //method to remove from cart
  removeFormCart(foodId: number):void{
    this.cart.items = this.cart.items.filter(item => item.food.id != foodId);
    
  }

  //get cart
  getCart():Cart{
    return this.cart;
  }


}