import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-carexplore',
  standalone: true, // Make it a standalone component
  imports: [CommonModule], // Add CommonModule here
  templateUrl: './carexplore.component.html',
  styleUrls: ['./carexplore.component.css']
})
export class CarexploreComponent {
  cars = [
    { name: 'Toyota', imgPath: 'toyota.png' },
    { name: 'Volkswagen', imgPath: 'volkswagen.png' },
    { name: 'Ford', imgPath: 'ford.png' },
    { name: 'Audi', imgPath: 'audi.png' },
    { name: 'Kia', imgPath: 'kia.png' },
    { name: 'Hyundai', imgPath: 'hyundai.png' },
    { name: 'Mahindra', imgPath: 'mahindra.png' },
    { name: 'BMW', imgPath: 'bmw.png' }
  ];
}
