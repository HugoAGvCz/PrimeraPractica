import { Component } from '@angular/core';
import { Productos } from '../../models/test';
import { CardComponent } from '../../components/card/card.component';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  productos: Productos[] = [
    {
      name: 'Producto 1',
      description: 'Descripción del producto 1',
      price: 0.0,
      img: '/img/hamster.jpg'
    },
    {
      name: 'Producto 2',
      description: 'Descripción del producto 2',
      price: 0.0,
      img: '/img/hamster.jpg'
    },
    {
      name: 'Producto 3',
      description: 'Descripción del producto 3',
      price: 0.0,
      img: '/img/hamster.jpg'
    }
  ];
}
