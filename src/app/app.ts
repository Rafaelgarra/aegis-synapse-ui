import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DeviceStatusComponent } from './components/device-status/device-status.components';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    DeviceStatusComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.sass'
})
export class App {
  protected title = 'aegis-synapse-ui';
}
