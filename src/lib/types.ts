export type WashInstruction =
  | 'tumbleDryLow' // Usar secadora en baja temperatura
  | 'tumbleDry' // Usar secadora
  | 'noTumbleDry' // No usar secadora
  | 'dryClean' // Lavado en seco
  | 'noDryClean' // No limpieza en seco
  | 'dryCleanHydrocarbons' // Lavado en seco con hidrocarburos
  | 'bleachAllowed' // Usar blanqueador
  | 'noBleachAllowed' // No usar blanqueador
  | 'washTemperature1' // Lavar a máquina en temperatura fría y ciclo delicado
  | 'washDry1' // Usar secadora en temperatura baja
  | 'iron1' // Planchar a temperatura baja
  | 'iron2' // Planchar a temperatura alta
  | 'handWash' // Lavar a mano
  | 'removePromptly'; // Retirar inmediatamente tras lavado

export type ExtraWashInstruction =
  | 'withZippers' // Lavar con cierres ajustados
  | 'noSoothing' // No usar suavizante
  | 'washAndIronBackwards' // Lavar y planchar al revés
  | 'similarColors' // Lavar con colores similares
  | 'softdetergent'; // Usar únicamente detergente suave

export interface Wearable {
  _id: string;
  userId: string;
  slug: string;
  thumbnail: string;
  type: number;
  description: string;
  name: string;
  order: number;
  sizes?: {
    total_large: number;
    total_width: number;
    shoulders_width: number;
  };
  composition?: {
    cotton: number;
    recycledCotton: number;
    polyester: number;
    nylon: number;
    elastane: number;
    polyamide: number;
    liningViscose: number;
    liningCupro: number;
  };
  wash?: WashInstruction[];
  extra?: ExtraWashInstruction[];
}
