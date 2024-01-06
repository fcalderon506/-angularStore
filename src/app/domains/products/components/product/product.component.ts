import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from './../../../shared/models/product.model';
import { CurrencyPipe, DatePipe, UpperCasePipe } from '@angular/common';
import { ReversePipe } from '@shared/pipes/reverse.pipe';
import { TimeAgoPipe } from '@shared/pipes/time-ago.pipe';
import { RouterLinkWithHref } from '@angular/router';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [
    CurrencyPipe,
    DatePipe,
    UpperCasePipe,
    ReversePipe,
    TimeAgoPipe,
    RouterLinkWithHref,
  ],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent {
  @Input({ required: true }) product!: Product;

  @Output() addToCart = new EventEmitter();

  addToCartHandler() {
    console.log('click from child');
    this.addToCart.emit(
      'Hola es este es un mensaje desde el hijo ' + this.product.title
    );
  }
}
