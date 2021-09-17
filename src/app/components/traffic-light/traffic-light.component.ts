import { Component } from '@angular/core';

@Component({
  selector: 'ck-traffic-light',
  templateUrl: './traffic-light.component.html',
})
export class TrafficLightComponent {
  message = '';

  updateLight(currentLight: string): void {
    const lights = ['green', 'yellow', 'red'];
    let nextLight = '';
    lights.indexOf(currentLight) == lights.length - 1
      ? (nextLight = lights[0])
      : (nextLight = lights[lights.indexOf(currentLight) + 1]);

    this.message = nextLight;
  }
}
