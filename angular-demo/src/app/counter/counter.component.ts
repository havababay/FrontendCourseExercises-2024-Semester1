import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { CounterValueComponent } from '../counter-value/counter-value.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-counter',
  imports: [MatButtonModule, CounterValueComponent, CommonModule],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  counter = 0;

  increment() {
    this.counter++;
  }

  decrement() {
    this.counter--;
  }

  isEven() : boolean {
    return this.counter % 2 === 0;
  }
}
