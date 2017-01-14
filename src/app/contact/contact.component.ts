import { Component } from '@angular/core';
import { Animations } from '../shared/transitionAnimation';

@Component({
  selector: 'my-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  host: { '[@routeAnimation]': 'true' },
  animations: Animations.page
})
export class ContactComponent {

  constructor() {}
}
