import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
  <h3>Counter: {{ counter }}</h3>
<button (click)="increaseBy()" class="btn btn-primary mx-2">+</button>
<button (click)="increaseBy(-1)" class="btn btn-primary ">-</button>
<button (click)="resetCounter()" class="btn btn-primary mx-2">Reset</button>
  `
})

export class CounterComponent {

  public counter: number = 10;

  increaseBy(value: number = 1):void {
    this.counter += value;
  }

  resetCounter(){
    this.counter = 10;
  }


}
