import { Component, input, InputSignal } from '@angular/core';
import { Icover } from '../../i-tracks';

@Component({
  selector: 'app-cover',
  standalone: true,
  imports: [],
  templateUrl: './cover.component.html',
  styleUrl: './cover.component.css'
})
export class CoverComponent {
   coverInfo: InputSignal<Icover | undefined> = input.required<Icover | undefined>();
}
