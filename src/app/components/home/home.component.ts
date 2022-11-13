import { Component, OnInit } from '@angular/core';
import { FoodService } from 'src/app/services/food.service';
import { Foods } from 'src/app/models/food';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  foods: Foods[] = [];
  constructor(
    private foodSvc:FoodService,
    private activatedRoute: ActivatedRoute
    ) { }

  ngOnInit(): void {


    this.activatedRoute.params
    .subscribe(params=>{
      if(params['tag'])
      this.foods =  this.foodSvc.getFoodByTag(params['tag']);
      else 
      this.foods =  this.foodSvc.getFoods();

    });    
  }

}
