export type WashInstruction =
  | 'tumbleDry'
  | 'tumbleDryLow'
  | 'tumbleDryNormal'
  | 'noTumbleDry'
  | 'dryClean'
  | 'tumbleHang'
  | 'noDryClean'
  | 'dryCleanHydrocarbons'
  | 'bleachAllowed'
  | 'noBleachAllowed'
  | 'washTemperature1'
  | 'iron1'
  | 'iron2'
  | 'noIron'
  | 'handWash'
  | 'perchloroethylene'
  | 'removePromptly'
  | 'waterRunOff';

export type WashMachineProgram =
  | 'Lavado a Mano'
  | 'Jeans'
  | 'Algodón'
  | 'Sintético'
  | 'Ropa Deportiva';

export type ExtraWashInstruction =
  | 'withZippers' // Lavar con cierres ajustados
  | 'noSoothing' // No usar suavizante
  | 'similarColors'; // Lavar con colores similares

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
    sleeves: number;
    rise: number;
    waist: number;
    botamaga: number;
    height: number;
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
    viscose: number;
    polyamide: number;
    liningPolyester: number;
    liningViscose: number;
    liningCupro: number;
    denim: number;
  };
  wash?: WashInstruction[];
  extra?: ExtraWashInstruction[];
  label?: string;
}
