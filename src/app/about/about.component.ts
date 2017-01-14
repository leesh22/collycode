import { Component } from '@angular/core';
import { Animations } from '../shared/transitionAnimation';

@Component({
  selector: 'my-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  host: { '[@routeAnimation]': 'true' },
  animations: Animations.page
})

export class AboutComponent {

  constructor() {}
}
