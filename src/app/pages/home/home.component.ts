import { Component } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  title = 'Práctica 1';

  verMas() {
    alert('Ver más sobre este animal');
  }

  /* saberMas() {
    alert('Ver más sobre los perros')
  } */
  
  goProducts() {
    window.location.href = '/products';
  }
}
