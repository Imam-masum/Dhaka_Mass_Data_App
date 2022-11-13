import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Foods } from 'src/app/models/food';
import { CartService } from 'src/app/services/cart.service';
import { FoodService } from 'src/app/services/food.service';

@Component({
  selector: 'app-food-page',
  templateUrl: './food-page.component.html',
  styleUrls: ['./food-page.component.css']
})
export class FoodPageComponent implements OnInit {
  food!:Foods;
  constructor(
    private activatedRoute:ActivatedRoute,
                private foodSvc:FoodService,
                private cartSvc:CartService,
                private router: Router
  ) { 
    this.activatedRoute.params.subscribe(param =>{
      if(param['id'])
      this.food = foodSvc.getFoodById(param['id']);
});
  }

  ngOnInit(): void {
  }
  addToCart(){
    this.cartSvc.addToCart(this.food);
    this.router.navigateByUrl('cart');
  }

  }


