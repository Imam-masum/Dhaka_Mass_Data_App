import { Component, OnInit } from '@angular/core';
import { MatTable, MatTableDataSource, _MatTableDataSource } from '@angular/material/table';
import { ProductListService } from 'src/app/services/product-list.service';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  productlists:any[]=[];
  productlists$:any;
  dataSource! : MatTableDataSource<any>;
  columnList: string[]=["category","description","image","price","rating","title"];
  constructor(private productListSvc:ProductListService) { }

  ngOnInit(): void {
     // for product list
     this.productListSvc.getProductList()
     .subscribe((result)=>{
       console.log(result);
       this.productlists = result;
       
     });
 
     this.productListSvc.getProductList()
     .subscribe(p=>{
       
     });
  }

}
