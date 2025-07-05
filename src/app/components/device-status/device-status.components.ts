import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AegisSynapseApi } from '../../services/aegis-synapse-api';
import { DeviceConnectivityStatus } from '../../common/enums/device/device-connectivity-status.enum';
import { DeviceData } from '../../interfaces/device-data.interface';

@Component({
  selector: 'app-device-status',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './device-status.components.html',
  styleUrls: ['./device-status.components.sass']
})
export class DeviceStatusComponent implements OnInit {
  DeviceConnectivityStatus = DeviceConnectivityStatus; // expoe enum para o template

  allDevices: DeviceData[] = [];
  selectedDeviceId: number | null = null;
  selectedDevice: DeviceData | null = null;
  errorMessage: string | null = null;
  isLoading = true;

  constructor(private aegisSynapseApiService: AegisSynapseApi) { }

  ngOnInit(): void {
    this.loadAllDevices();
  }

  loadAllDevices(): void {
    this.isLoading = true;
    this.errorMessage = null;
    this.aegisSynapseApiService.getDevicesForFrontend().subscribe({
      next: (data) => {
        this.allDevices = data;
        this.isLoading = false;
        if (this.allDevices.length > 0) {
          this.selectedDeviceId = this.allDevices[0].id;
          this.onDeviceSelect();
        }
      },
      error: (err) => {
        console.error('Erro ao carregar dispositivos:', err);
        this.errorMessage = 'Não foi possível carregar a lista de dispositivos. Verifique a API ou a conexão.';
        this.isLoading = false;
      }
    });
  }

  onDeviceSelect(): void {
    if (this.selectedDeviceId !== null) {
      this.selectedDevice = this.allDevices.find(device => device.id === this.selectedDeviceId) || null;
    } else {
      this.selectedDevice = null;
    }
  }

  selectDevice(id: number): void {
    this.selectedDeviceId = id;
    this.onDeviceSelect();
  }
}
