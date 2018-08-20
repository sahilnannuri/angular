export class ProductModel {
    productId: number;
    productName:string;
    unitPrice:number;
    unitsInStock:number;
    discontinued:boolean;

    constructor(pid,pname,price,stock,instock){
    this.productId=pid;
    this.productName=pname;
    this.unitPrice=price;
    this.unitsInStock=stock;
    this.discontinued=instock;
}

  
}
