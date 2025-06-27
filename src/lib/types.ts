export type WashInstruction =
  | 'inDry'
  | 'noInDry' // No lavar en seco.
  | 'bleachAllowed'
  | 'noBleachAllowed' // No usar blanqueador
  | 'washTemperature1' // Lavar a máquina en temperatura fría y en ciclo delicado.
  | 'washDry1' // Puede utilizarse secadora en tempratura baja.
  | 'iron1' // Planchar a temperatura baja.
  | 'iron2' // Planchar a temperatura alta
  | 'noDryer' // No utillizar secadora
  | 'handWash'; // Lavar a mano

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
    cotton: string;
    polyester: string;
  };
  wash?: WashInstruction[];
  extra?: ExtraWashInstruction[];
}
