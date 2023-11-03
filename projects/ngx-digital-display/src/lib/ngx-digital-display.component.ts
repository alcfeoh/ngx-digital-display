import {Component, Input, ViewEncapsulation} from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'ngx-digital-display',
  templateUrl: 'ngx-digital-display.component.html',
  styleUrls: ['ngx-digital-display.component.css'],
  imports: [
    CommonModule
  ],
  standalone: true,
  encapsulation: ViewEncapsulation.None
})
export class NgxDigitalDisplayComponent {

  @Input()
  number?: number | string;

  @Input()
  digitColor: string = 'orange';

}
