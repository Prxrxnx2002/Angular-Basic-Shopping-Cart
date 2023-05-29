import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import { FormBuilder } from '@angular/forms';
import { log } from 'console';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  constructor(private cartServ: CartService, private fb: FormBuilder){}

  items = this.cartServ.getItems()
  checkoutForm = this.fb.group({
    name: [''],
    address: ['']
  })

  onSubmit(){
    this.items = this.cartServ.clearCart()
    console.log('Order Submitted!',this.checkoutForm.value)
    this.checkoutForm.reset()
    
  } 
}
