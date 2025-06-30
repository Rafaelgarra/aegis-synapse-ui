// src/app/interfaces/ai-analysis.interface.ts

// Se você precisar de detalhes da missão ou dos dados coletados dentro da AIAnalysis,
// importe as interfaces correspondentes, mas geralmente não é necessário aqui
// para evitar dependências circulares ou sobrecarga de dados.

export interface AIAnalysis {
  id: number;
  analysisType: string;
  resultText: string;
  confidenceScore?: number; // Opcional, pois é nullable
  analysisDatetime: Date;
  iaModelUsed?: string; // Opcional, pois é nullable

  // collectedDataId e missionId (FKs)
  collectedDataId?: number; // Opcional, pois é nullable
  missionId?: number;     // Opcional, pois é nullable

  // Note: collectedData e mission (objetos completos) geralmente não são incluídos aqui
  // para evitar loops ou dados redundantes no frontend, a menos que seja estritamente necessário.
  // Se precisar, adicione as interfaces e marque como opcionais.
  // collectedData?: CollectedData;
  // mission?: Mission;
}