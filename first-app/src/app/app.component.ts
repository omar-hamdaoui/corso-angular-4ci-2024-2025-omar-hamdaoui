import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BindingsComponent } from './bindings/bindings.component';
import { SliderComponent } from './slider/slider.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BindingsComponent, SliderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'first-app';
}
