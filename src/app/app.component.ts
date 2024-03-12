import { Component } from '@angular/core'
import { RouterOutlet } from '@angular/router'
import { NavBarComponent } from './nav-bar/nav-bar.component'
import { ProductCardsComponent } from './product-cards/product-cards.component'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavBarComponent, ProductCardsComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {
  title = 'Tienda'
}
