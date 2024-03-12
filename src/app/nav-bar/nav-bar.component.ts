import { Component } from '@angular/core'

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [],
  templateUrl: './nav-bar.html',
  styleUrl: './nav-bar.css'
})
export class NavBarComponent {
  nav = {
    logo: {
      imageURL: '../../assets/angular.svg'
    },
    cart: {
      imageURL: '../../assets/cart.svg'
    },
    menu: {
      imageURL: '../../assets/menu.svg'
    },
    sections: [
      {
        name: 'Home',
        ref: 'home',
        index: 0
      },
      {
        name: 'Catálogo',
        ref: 'catalog',
        index: 1
      },

      {
        name: 'Nosotros',
        ref: 'about',
        index: 2
      }
    ],
    login: {
      imageURL: '../../assets/user.svg',
      logText: 'Iniciar sesión',
      registerText: 'Registrarse'
    }
  }
  showList() {
    const list = document.querySelector('.list')
    list?.classList.toggle('hidden')
  }
}
