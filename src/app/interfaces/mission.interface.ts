import { CollectedData } from "./collected-data.interface";
import { OperationalStatus } from "./operational-status.interface";

export interface Mission {
	id: number;
	missionName: string;
	objective?: string; // Opcional, pois é nullable no backend
	startDatetime: Date; // Usamos 'Date' no frontend para representar 'timestamp with time zone'
	endDatetime: Date;   // Usamos 'Date' no frontend para representar 'timestamp with time zone'
	researchedArea?: string; // Opcional, pois é nullable no backend
	missionStatus: OperationalStatus; // Usando a interface OperationalStatus que já temos para StatusEntity
	missionStatusId: number; // Opcional se você só precisar do objeto completo
	deviceId: number;
	collectedData?: CollectedData[]; // Opcional, se nem sempre for carregado ou se pode ser vazio
}