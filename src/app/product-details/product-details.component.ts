import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { products, Product } from '../products';
import { CartService } from '../cart.service';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {
  product: Product | undefined;
  constructor(private route: ActivatedRoute, private cartServie: CartService) {
  };

  ngOnInit() {
    const currentRoute = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(currentRoute.get('productId'))
    this.product = products.find( product => product.id === productIdFromRoute);
  }

  addToCart(product: Product) {
    this.cartServie.addToCart(product);
    window.alert(product.name + ' added to cart');
  }
}
