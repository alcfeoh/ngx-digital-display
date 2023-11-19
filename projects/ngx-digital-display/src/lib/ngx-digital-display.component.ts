import {Component, Input, numberAttribute, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'ngx-digital-display',
  templateUrl: 'ngx-digital-display.component.html',
  styleUrls: ['ngx-digital-display.component.css'],
  standalone: true,
  encapsulation: ViewEncapsulation.None
})
export class NgxDigitalDisplayComponent {

  private paths = [
    "m178.52 60s-30.59 5.557-44.18 12.621c-12.6 6.555-33.13 26.824-33.13 26.824l104.14 48.915 145.16-1.58 55.22-80.469-227.21-6.311zm249.3 17.355l-58.38 86.785-9.47 219.32 80.47 53.64 20.52-20.51 14.2-277.7s-7.29-24.26-17.63-36.46c-6.8-8.03-29.71-25.075-29.71-25.075zm-343.97 45.765l-18.932 290.32 28.619 17.57 75.519-45.97 14.2-216.17-99.406-45.75zm7.945 351.07l-26.221 18.4-5.578 287.85 100.97-47.97 8.92-220.35-78.091-37.93zm359.69 3.93l-97.83 34.72-7.89 225.63 52.07 83.62s31.57-18.32 41.03-33.13c9.33-14.63 12.62-50.49 12.62-50.49l11.04-244.57-11.04-15.78zm-127.01 274.97l-148.59 0.5-101.57 49.03c0.002 0 17.693 15.28 28 20.54 9.68 4.94 31.04 9.98 31.04 9.98l243.15 0.99-52.03-81.04z",
    "m427.82 77.355l-58.38 86.785-9.47 219.32 80.47 53.64 20.52-20.51 14.2-277.7s-7.29-24.26-17.63-36.46c-6.8-8.03-29.71-25.075-29.71-25.075zm23.67 400.76l-97.83 34.72-7.89 225.63 52.07 83.62s31.57-18.32 41.03-33.13c9.33-14.63 12.62-50.49 12.62-50.49l11.04-244.57-11.04-15.78z",
    "m178.52 60s-30.59 5.557-44.18 12.621c-12.6 6.555-33.13 26.824-33.13 26.824l104.14 48.915 145.16-1.58 55.22-80.469-227.21-6.311zm249.3 17.355l-58.38 86.785-9.47 219.32 80.47 53.64 20.52-20.51 14.2-277.7s-7.29-24.26-17.63-36.46c-6.8-8.03-29.71-25.075-29.71-25.075zm-235.52 323.46l-83.62 50.49 69.42 34.72 157.79 7.88 92.68-33.54-87.92-58.71-148.35-0.84zm-100.5 73.38l-26.221 18.4-5.578 287.85 100.97-47.97 8.92-220.35-78.091-37.93zm232.68 278.9l-148.59 0.5-101.57 49.03c0.002 0 17.693 15.28 28 20.54 9.68 4.94 31.04 9.98 31.04 9.98l243.15 0.99-52.03-81.04z",
    "m178.52 60s-30.59 5.557-44.18 12.621c-12.6 6.555-33.13 26.824-33.13 26.824l104.14 48.915 145.16-1.58 55.22-80.469-227.21-6.311zm249.3 17.355l-58.38 86.785-9.47 219.32 80.47 53.64 20.52-20.51 14.2-277.7s-7.29-24.26-17.63-36.46c-6.8-8.03-29.71-25.075-29.71-25.075zm-235.52 323.46l-83.62 50.49 69.42 34.72 157.79 7.88 92.68-33.54-87.92-58.71-148.35-0.84zm259.19 77.31l-97.83 34.72-7.89 225.63 52.07 83.62s31.57-18.32 41.03-33.13c9.33-14.63 12.62-50.49 12.62-50.49l11.04-244.57-11.04-15.78zm-127.01 274.97l-148.59 0.5-101.57 49.03c0.002 0 17.693 15.28 28 20.54 9.68 4.94 31.04 9.98 31.04 9.98l243.15 0.99-52.03-81.04z",
    "m427.82 77.355l-58.38 86.785-9.47 219.32 80.47 53.64 20.52-20.51 14.2-277.7s-7.29-24.26-17.63-36.46c-6.8-8.03-29.71-25.075-29.71-25.075zm-343.97 45.765l-18.932 290.32 28.619 17.57 75.519-45.97 14.2-216.17-99.406-45.75zm108.45 277.69l-83.62 50.49 69.42 34.72 157.79 7.88 92.68-33.54-87.92-58.71-148.35-0.84zm259.19 77.31l-97.83 34.72-7.89 225.63 52.07 83.62s31.57-18.32 41.03-33.13c9.33-14.63 12.62-50.49 12.62-50.49l11.04-244.57-11.04-15.78z",
    "m178.52 60s-30.59 5.557-44.18 12.621c-12.6 6.555-33.13 26.824-33.13 26.824l104.14 48.915 145.16-1.58 55.22-80.469-227.21-6.311zm-94.666 63.12l-18.932 290.32 28.619 17.57 75.519-45.97 14.2-216.17-99.406-45.75zm108.45 277.69l-83.62 50.49 69.42 34.72 157.79 7.88 92.68-33.54-87.92-58.71-148.35-0.84zm259.19 77.31l-97.83 34.72-7.89 225.63 52.07 83.62s31.57-18.32 41.03-33.13c9.33-14.63 12.62-50.49 12.62-50.49l11.04-244.57-11.04-15.78zm-127.01 274.97l-148.59 0.5-101.57 49.03c0.002 0 17.693 15.28 28 20.54 9.68 4.94 31.04 9.98 31.04 9.98l243.15 0.99-52.03-81.04z",
    "m178.52 60s-30.59 5.557-44.18 12.621c-12.6 6.555-33.13 26.824-33.13 26.824l104.14 48.915 145.16-1.58 55.22-80.469-227.21-6.311zm-94.666 63.12l-18.932 290.32 28.619 17.57 75.519-45.97 14.2-216.17-99.406-45.75zm108.45 277.69l-83.62 50.49 69.42 34.72 157.79 7.88 92.68-33.54-87.92-58.71-148.35-0.84zm-100.5 73.38l-26.221 18.4-5.578 287.85 100.97-47.97 8.92-220.35-78.091-37.93zm359.69 3.93l-97.83 34.72-7.89 225.63 52.07 83.62s31.57-18.32 41.03-33.13c9.33-14.63 12.62-50.49 12.62-50.49l11.04-244.57-11.04-15.78zm-127.01 274.97l-148.59 0.5-101.57 49.03c0.002 0 17.693 15.28 28 20.54 9.68 4.94 31.04 9.98 31.04 9.98l243.15 0.99-52.03-81.04z",
    "m178.52 60s-30.59 5.557-44.18 12.621c-12.6 6.555-33.13 26.824-33.13 26.824l104.14 48.915 145.16-1.58 55.22-80.469-227.21-6.311zm249.3 17.355l-58.38 86.785-9.47 219.32 80.47 53.64 20.52-20.51 14.2-277.7s-7.29-24.26-17.63-36.46c-6.8-8.03-29.71-25.075-29.71-25.075zm23.67 400.76l-97.83 34.72-7.89 225.63 52.07 83.62s31.57-18.32 41.03-33.13c9.33-14.63 12.62-50.49 12.62-50.49l11.04-244.57-11.04-15.78z",
    "m178.52 60s-30.59 5.557-44.18 12.621c-12.6 6.555-33.13 26.824-33.13 26.824l104.14 48.915 145.16-1.58 55.22-80.469-227.21-6.311zm249.3 17.355l-58.38 86.785-9.47 219.32 80.47 53.64 20.52-20.51 14.2-277.7s-7.29-24.26-17.63-36.46c-6.8-8.03-29.71-25.075-29.71-25.075zm-343.97 45.765l-18.932 290.32 28.619 17.57 75.519-45.97 14.2-216.17-99.406-45.75zm108.45 277.69l-83.62 50.49 69.42 34.72 157.79 7.88 92.68-33.54-87.92-58.71-148.35-0.84zm-100.5 73.38l-26.221 18.4-5.578 287.85 100.97-47.97 8.92-220.35-78.091-37.93zm359.69 3.93l-97.83 34.72-7.89 225.63 52.07 83.62s31.57-18.32 41.03-33.13c9.33-14.63 12.62-50.49 12.62-50.49l11.04-244.57-11.04-15.78zm-127.01 274.97l-148.59 0.5-101.57 49.03c0.002 0 17.693 15.28 28 20.54 9.68 4.94 31.04 9.98 31.04 9.98l243.15 0.99-52.03-81.04z",
    "m178.52 60s-30.59 5.557-44.18 12.621c-12.6 6.555-33.13 26.824-33.13 26.824l104.14 48.915 145.16-1.58 55.22-80.469-227.21-6.311zm249.3 17.355l-58.38 86.785-9.47 219.32 80.47 53.64 20.52-20.51 14.2-277.7s-7.29-24.26-17.63-36.46c-6.8-8.03-29.71-25.075-29.71-25.075zm-343.97 45.765l-18.932 290.32 28.619 17.57 75.519-45.97 14.2-216.17-99.406-45.75zm108.45 277.69l-83.62 50.49 69.42 34.72 157.79 7.88 92.68-33.54-87.92-58.71-148.35-0.84zm259.19 77.31l-97.83 34.72-7.89 225.63 52.07 83.62s31.57-18.32 41.03-33.13c9.33-14.63 12.62-50.49 12.62-50.49l11.04-244.57-11.04-15.78zm-127.01 274.97l-148.59 0.5-101.57 49.03c0.002 0 17.693 15.28 28 20.54 9.68 4.94 31.04 9.98 31.04 9.98l243.15 0.99-52.03-81.04z"
  ];

  protected numberPath = this.paths[0];

  @Input({ transform: numberAttribute})
  set number(num: number) {
    this.numberPath = this.paths[num];
  }

  @Input()
  digitColor: string = 'orange';

}
