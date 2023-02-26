import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-square',
  template: `
  <button>{{ Value }}</button>
  `,
  styles: [
  ]
})
export class SquareComponent {
@Input() Value: 'X' | 'O' = 'X'; 
}
