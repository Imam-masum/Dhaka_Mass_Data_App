import { Component, OnInit,Input } from '@angular/core';
import { Tag } from 'src/app/models/tag';
import { FoodService } from 'src/app/services/food.service';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit {

  @Input()
  foodPageTags?:string[];
  @Input()
  justifyContent:string = "center"
  tags:Tag[] =[]
  constructor(private foodSvc:FoodService) { }

  ngOnInit(): void {
    if(!this.foodPageTags)
    this.tags =  this.foodSvc.getAllTags()
  }

}
