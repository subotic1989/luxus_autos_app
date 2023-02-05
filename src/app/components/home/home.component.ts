import { Component } from '@angular/core';
import { ParallaxDirective } from './home.directive';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  entryComponents: [ParallaxDirective],
})
export class HomeComponent {
  constructor() {}
}
