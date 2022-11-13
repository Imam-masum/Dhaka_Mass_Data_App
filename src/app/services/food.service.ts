import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Foods } from 'src/app/models/food';
import { Tag } from 'src/app/models/tag';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  

  //get all tags
  getAllTags():Tag[]{
    return [
      {name:"Snacks",count:3},
      {name:"Breakfast",count:4},
      {name:"Lunch",count:3},
      {name:"Dinner",count:5},
    ]
  }

  //get food by id
  getFoodById(id:number):Foods{
   return this.getFoods().find(item => item.id == id)!;
  }

  //get food by tags
  getFoodByTag(tag:string):Foods[]{
    if(tag=="All")
    return this.getFoods();
    else{
     return this.getFoods().filter(food => food.tags?.includes(tag));
    }
     
  }

  getFoods():Foods[]{
    return[
      {
        id:1,
        name:'Orange Fruits',
        price:280,
        cookTime:'20-30',
        favorite:true,
        origins:['USA','US'],
        star:4.7,
        imageUrl:'/assets/snacks.jpg',
        tags:['Snacks']
      
      },
      {
        id:2,
        name:'Stoberry',
        price:180,
        cookTime:'20-30',
        favorite:false,
        origins:['Germany','US'],
        star:4,
        imageUrl:'/assets/snacks.jpg',
        tags:['Snacks']
      
      },
      {
        id:3,
        name:'Fruits Bread',
        price:150,
        cookTime:'20-30',
        favorite:true,
        origins:['China'],
        star:5,
        imageUrl:'/assets/snacks.jpg',
        tags:['Snacks']
      
      },
      {
        id:4,
        name:'Mushroom Burger',
        price:150,
        cookTime:'20-30',
        favorite:true,
        origins:['Portuguese'],
        star:4.5,
        imageUrl:'/assets/lunch.jpg',
        tags:['Lunch']    
      },
      {
        id:5,
        name:'Dim Khichuri',
        price:150,
        cookTime:'25-30',
        favorite:true,
        origins:['Bangladesh'],
        star:4.5,
        imageUrl:'/assets/lunch.jpg',
        tags:['Lunch']    
      },
      {
        id:6,
        name:'Vuna Khichuri',
        price:160,
        cookTime:'30-40',
        favorite:true,
        origins:['Bangladesh'],
        star:4.7,
        imageUrl:'/assets/lunch.jpg',
        tags:['Lunch']    
      },
      {
        id:6,
        name:'Vuna Khichuri',
        price:160,
        cookTime:'30-40',
        favorite:true,
        origins:['Bangladesh'],
        star:4.7,
        imageUrl:'/assets/lunch.jpg',
        tags:['Lunch','Dinner']    
      },
      {
        id:7,
        name:'Dal-Vat',
        price:160,
        cookTime:'30-40',
        favorite:true,
        origins:['Bangladesh'],
        star:4.7,
        imageUrl:'/assets/dinner2.jpg',
        tags:['Lunch']    
      },
      {
        id:8,
        name:'Grilled Chicken Nan',
        price:160,
        cookTime:'30-40',
        favorite:true,
        origins:['Bangladesh'],
        star:4.7,
        imageUrl:'/assets/dinner2.jpg',
        tags:['Lunch','Dinner']    
      },
      {
        id:9,
        name:'Nan Gril',
        price:50,
        cookTime:'15-20',
        favorite:true,
        origins:['Bangladesh'],
        star:4.8,
        imageUrl:'/assets/dinner2.jpg',
        tags:['Breakfast','Dinner']    
      },

      {
        id:10,
        name:'Nan With Kabab',
        price:220,
        cookTime:'30-40',
        favorite:true,
        origins:['Bangladesh'],
        star:5,
        imageUrl:'/assets/dinner2.jpg',
        tags:['Dinner']    
      },
      {
        id:11,
        name:'Nan With Baji',
        price:50,
        cookTime:'30-40',
        favorite:true,
        origins:['Bangladesh'],
        star:5,
        imageUrl:'/assets/dinner2.jpg',
        tags:['Dinner']    
      }




    ]
  }
}
