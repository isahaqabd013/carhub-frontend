import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent} from './navbar/navbar.component';  // Import your NavBarComponent
import { HeaderComponent } from './Heropage/header.component';  // Import HeroPageComponent
import { CarexploreComponent } from './carexplore/carexplore.component';  // Import ExplorePageComponent

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, HeaderComponent, CarexploreComponent],  // Include all necessary components
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'vehicle';
}
