import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-reouter-demo',
  imports: [],
  templateUrl: './reouter-demo.component.html',
  styleUrl: './reouter-demo.component.css'
})
export class ReouterDemoComponent {
  @Input() id = 0;
}
