import { Component } from '@angular/core'

@Component({
  selector: 'app-product-cards',
  standalone: true,
  imports: [],
  templateUrl: './product-cards.html',
  styleUrl: './product-cards.css'
})
export class ProductCardsComponent {
  currency = '$'

  products = [
    {
      name: 'Camiseta',
      imageURL: '../../assets/camiseta.jpg',
      description: 'Camiseta de astronauta',
      price: 100
    },
    {
      name: 'Pantalón',
      imageURL: '../../assets/pants.jpg',
      description: 'Pantalón de astronauta',
      price: 200
    },
    {
      name: 'Camiseta',
      imageURL: '../../assets/camiseta.jpg',
      description: 'Pantalón de astronauta',
      price: 100
    },
    {
      name: 'Pantalón',
      imageURL: '../../assets/pants.jpg',
      description: 'Pantalón de astronauta',
      price: 200
    },
    {
      name: 'Camiseta',
      imageURL: '../../assets/camiseta.jpg',
      description: 'Pantalón de astronauta',
      price: 100
    },
    {
      name: 'Pantalón',
      imageURL: '../../assets/pants.jpg',
      description: 'Pantalón de astronauta',
      price: 200
    }
  ]
  selectedImageURL: string | null = null
  tooglePreview(imageURL: string) {
    this.selectedImageURL = imageURL
    const imagePreview = document.querySelector('.image-preview')
    if (imagePreview) {
      imagePreview.classList.toggle('openPreview')
      imagePreview.classList.toggle('hiddenPreview')
    }
  }
}
