// Importe os enums de dispositivo
import { DeviceConnectivityStatus } from "../common/enums/device/device-connectivity-status.enum"; // Ajuste o caminho conforme seu projeto Angular
import { DeviceOperationMode } from "../common/enums/device/device-operation-mode.enum";
import { DevicePowerMode } from "../common/enums/device/device-power-mode.enum";

// Importe as interfaces dos relacionamentos (caminhos a ajustar conforme sua estrutura)
// Certifique-se de que esses arquivos existem com essas interfaces definidas.
import { OperationalStatus } from './operational-status.interface'; // Exemplo: src/app/interfaces/operational-status.interface.ts
import { Mission } from './mission.interface';                     // Exemplo: src/app/interfaces/mission.interface.ts

export interface DeviceData {
    id: number;
    deviceName: string;
    
    serialNumber: string;
    model: string;
    manufactureDate: Date; // A data é um objeto Date no TS, se o backend retornar string, ajuste para string.
    batteryLevel: number;
    
    ConnectionStatus: DeviceConnectivityStatus; 
    operationMode: DeviceOperationMode;
    powerMode: DevicePowerMode;

    operationalStatus: OperationalStatus; // Representa o objeto StatusEntity completo
    operationalStatusId: number;          // O ID da FK, se precisar dele no frontend
    missions: Mission[];                  // Array de Missões
}