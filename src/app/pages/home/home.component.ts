import { Component } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardComponent, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  email: string = '';
  password: string = '';

  login(user:string, password:string) {
    // user será el tipó de usuario, correo, etc.

    console.log(`Usuario: ${ user }\nContraseña: ${ password }`);
  }

}
