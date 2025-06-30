import { OperationalStatus } from './operational-status.interface';

export interface SensorData {
    id: number;
    sensorName: string;
    numericValue?: number; // Opcional, pois é nullable
    textValue?: string;    // Opcional, pois é nullable
    unitOfMeasure?: string; // Opcional, pois é nullable
    collectedDataId: number;
    sensorStatus: OperationalStatus;
    sensorStatusId: number;
}