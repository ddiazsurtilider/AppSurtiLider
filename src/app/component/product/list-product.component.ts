import { Component, OnInit } from '@angular/core';

import { ProductService } from 'src/app/service/product/product.service';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.scss'],
})
export class ListProductComponent implements OnInit {

  public arrayDataProducts = new Array();

  constructor(public productService: ProductService) { }

  ngOnInit() {
    this.getProducts()
  }

  ngAfterViewInit() {
    this.fillArrayProducts();
  }

  public slideOpts = {
    slidesPerView: "auto",
    spaceBetween: 16
  }

  public getProducts() {
    this.productService.getCurrentProducts("0")
  }

  fillArrayProducts() {
    this.arrayDataProducts = this.productService.arrayDataProducts
    console.log("ARRAY DATA PROPDUCTS")
    console.log(this.arrayDataProducts)
  }

}