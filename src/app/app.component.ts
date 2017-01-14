import { Component } from '@angular/core';
import { ApiService } from './shared/api.service';

import '../style/app.scss';

@Component({
  selector: 'my-app', // <my-app></my-app>
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  displayContactDetails: boolean = false;
  displayNavLinks: boolean = false;

  constructor(private api: ApiService) {
    // Do something with api
  }

  showContactDetails(): void {
    this.displayContactDetails = true;
  }

  hideContactDetails(): void {
    this.displayContactDetails = false;
  }

  showNav(): void {
    this.displayNavLinks = true;
  }

  hideNav(): void {
    this.displayNavLinks = false;
  }

}
