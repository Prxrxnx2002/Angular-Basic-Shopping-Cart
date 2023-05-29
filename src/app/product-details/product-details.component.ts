import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, products } from '../products';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit{
  product: Product | undefined
  constructor(private route:  ActivatedRoute, private cartServ: CartService){}
  ngOnInit(){
    //get product id from route
    const routePara = this.route.snapshot.paramMap
    const routProdId = Number(routePara.get('productId'))

    //compare id with product
    this.product = products.find(product => product.id === routProdId)
  }

  addToCart(product: Product) {
    this.cartServ.addToCart(product);
    window.alert('Your product has been added to the cart!');
  }
  
}

