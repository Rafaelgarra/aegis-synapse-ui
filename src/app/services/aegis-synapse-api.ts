import { Injectable } from '@angular/core';
import { DeviceData } from '../interfaces/device-data.interface'; // <-- Mude esta linha
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AegisSynapseApi {
  private baseUrl = 'http://localhost:3000'; // <-- **MUDE AQUI PELA URL REAL DA SUA API**

  constructor(private http: HttpClient) { }

  getDevicesForFrontend(): Observable<DeviceData[]> {
    const url = `${this.baseUrl}/devices/devices-informations`;
    return this.http.get<DeviceData[]>(url);
  }

  getDeviceById(id: string): Observable<DeviceData> {
    const url = `${this.baseUrl}/devices/${id}`;
    return this.http.get<DeviceData>(url);
  }

}
