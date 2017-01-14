import {  Component } from '@angular/core';
import { Animations } from '../shared/transitionAnimation';

@Component({
  selector: 'my-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  host: { '[@routeAnimation]': 'true' },
  animations: Animations.page
})

export class HomeComponent {

  constructor() {
    // Do stuff
  }

}
