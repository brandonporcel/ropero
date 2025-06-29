export type WashInstruction =
  | 'tumbleDry'
  | 'tumbleDryLow'
  | 'noTumbleDry'
  | 'dryClean'
  | 'noDryClean'
  | 'dryCleanHydrocarbons'
  | 'bleachAllowed'
  | 'noBleachAllowed'
  | 'washTemperature1'
  | 'iron1'
  | 'iron2'
  | 'handWash'
  | 'removePromptly';

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
    denim: number;
  };
  wash?: WashInstruction[];
  extra?: ExtraWashInstruction[];
}
