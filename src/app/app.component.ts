import { Component } from '@angular/core';
import { ProductModel } from './product-model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sahil';
  model:ProductModel;

  productList:ProductModel[];

  constructor(){
    this.model=new ProductModel(1,"sahil",10,20,false);
    this.productList=[
          new ProductModel(1,"p1",10,20,true),
          new ProductModel(2,"p2",12,21,true),
          new ProductModel(3,"p3",13,22,true),
          new ProductModel(4,"p4",11,30,false)



    ];
  }
  showDetails():any{
    return "this code is served from .ts file";
  }
}
