import { Component, Input, OnInit } from '@angular/core';

import { FavoriteService } from 'src/app/service/favorite/favorite.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
})

export class ProductComponent implements OnInit {

  @Input() productObject: any = new Array();

  public favoriteList = new Array();
  public isFavorite = false;

  constructor(public favoriteService: FavoriteService) { }

  ngOnInit() {
    this.getFavoriteTag()
  }

  addProductToFavorite(idProduct) {
    this.favoriteService.addProductToFavorite(idProduct).finally(() => {
      if (this.favoriteService.productAddSuccess()) {
        this.isFavorite = true
      }
    });
  }

  removeProductToFavorite(idProduct) {
    this.favoriteService.removeFavoriteProducts(idProduct).finally(() => {
      if (!this.favoriteService.productAddSuccess()) {
        this.isFavorite = false
      }
    });
  }

  getFavoriteTag() {
    this.fillArrayList().then(() => {
      for (let index = 0; index < this.favoriteList.length; index++) {
        const element = this.favoriteList[index];
        if (element.code == this.productObject.code) {
          this.isFavorite = true
        }
      }
    })
  }

  async fillArrayList() {
    this.favoriteList = this.favoriteService.arrayFavorites()
  }

}
