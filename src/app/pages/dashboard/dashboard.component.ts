import { Component } from '@angular/core';
import { Roles, Usuario } from '../../models/test';
import { CardComponent } from "../../components/card/card.component";
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  roles: Roles = {
    rol: "Admin"
  }

  usuarios: Usuario[] = [ 
    {
      id: 1,
      name: 'Hugo',
      description: 'Administrador',
      rol: this.roles
    }, 
    {
      id: 2,
      name: 'Alejandro',
      description: 'Administrador',
      rol: { 
        rol: "Admin" 
      }
    },
    {
      id: 3,
      name: 'Javier',
      description: 'Vendedor',
      rol: {
        rol: "Vendedor"
      }
    }, 
    {
      id: 4,
      name: 'Luis',
      description: 'Vendedor',
      rol: { 
        rol: "Vendedor" 
      }
    }, 
    {
      id: 5,
      name: 'Carlos',
      description: 'Vendedor',
      rol: { 
        rol: "Vendedor" 
      }
    }, 
    {
      id: 6,
      name: 'Karla',
      description: 'Cliente',
      rol: { 
        rol: "Cliente" 
      }
    }, 
    {
      id: 7,
      name: 'Juan',
      description: 'Cliente',
      rol: { 
        rol: "Cliente" 
      }
    }
  ];
}
