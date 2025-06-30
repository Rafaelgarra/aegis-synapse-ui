// src/app/interfaces/video.interface.ts

// Importe a interface para o status da mídia, que é do tipo StatusEntity
import { OperationalStatus } from './operational-status.interface'; // Reutilizando OperationalStatus para StatusEntity

export interface Video {
    id: number;
    fileName: string;
    filePath: string;
    durationSeconds?: number; // Opcional, pois é nullable
    format?: string;        // Opcional, pois é nullable
    sizeMb?: number;        // Opcional, pois é nullable
    collectedDataId: number;
    mediaStatus: OperationalStatus;
    mediaStatusId: number;
}