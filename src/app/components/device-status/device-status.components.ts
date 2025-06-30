// src/app/components/device-status/device-status.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DeviceData } from '../../interfaces/device-data.interface';
import { AegisSynapseApi } from '../../services/aegis-synapse-api';

// --- IMPORTAR AS INTERFACES DE RELACIONAMENTO AQUI ---
import { OperationalStatus } from '../../interfaces/operational-status.interface'; // Ajuste o caminho se necessário
import { Mission } from '../../interfaces/mission.interface';             // Ajuste o caminho se necessário
// --- FIM DOS IMPORTS ---

@Component({
  selector: 'app-device-status',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './device-status.components.html',
  styleUrl: './device-status.components.sass'
})
export class DeviceStatusComponent implements OnInit {
  allDevices: DeviceData[] = [];
  selectedDeviceId: number | null = null;
  selectedDevice: DeviceData | null = null;
  errorMessage: string | null = null;
  isLoading: boolean = true;

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
        console.error('Erro ao carregar todos os dispositivos:', err);
        this.errorMessage = 'Não foi possível carregar a lista de dispositivos. Verifique a API ou a conexão.';
        this.isLoading = false;
      }
    });
  }

  onDeviceSelect(): void {
    if (this.selectedDeviceId !== null) {
      this.selectedDevice = this.allDevices.find(
        device => device.id === this.selectedDeviceId
      ) || null;
    } else {
      this.selectedDevice = null;
    }
  }

}