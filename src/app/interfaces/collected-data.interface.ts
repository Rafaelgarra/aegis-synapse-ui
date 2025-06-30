import { SensorData } from "./sensor-data.interface";
import { Image } from "./image.interface";
import { Video } from "./video.interface";
import { AIAnalysis } from "./ai-analysis.interface";

export interface CollectedData {
  id: number;
  collectionDatetime: Date;
  latitude: number;
  longitude: number;
  altitude?: number; // Opcional, pois é nullable no backend
  aegisBatteryLevel?: number; // Opcional, pois é nullable no backend
  dataType: string; // Ex: "Sensor", "Image", "Video"
  sensorData?: SensorData;
  image?: Image;
  video?: Video;
  aiAnalysis?: AIAnalysis;
}