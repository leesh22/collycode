import {style, animate, transition, state, trigger} from '@angular/core';

export class Animations {
  static page = [
    trigger('routeAnimation', [
      state('*', style({ opacity: 1 })),
      transition('void => *', [
          style({ opacity: 0 }),
        animate('2000ms ease-in')
      ]),
      transition('* => void',
        animate('500ms ease-out',
          style({ opacity: 0 }))
      )
    ])
  ];
}
