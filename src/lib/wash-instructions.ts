import type { ExtraWashInstruction, WashInstruction } from '@/lib/types';
import Bleach from '@/components/icons/Bleach.vue';
import HandWash from '@/components/icons/HandWash.vue';
import Ironing1 from '@/components/icons/Ironing1.vue';
import Ironing2 from '@/components/icons/Ironing2.vue';
import NoBleach from '@/components/icons/NoBleach.vue';
import WashDry1 from '@/components/icons/WashDry1.vue';
import WashDryCleanOff from '@/components/icons/WashDryCleanOff.vue';
import WashTemperature1 from '@/components/icons/WashTemperature1.vue';
import WashTumbleDry from '@/components/icons/WashTumbleDry.vue';
import WashTumbleOff from '@/components/icons/WashTumbleOff.vue';

export const washIcons: Record<WashInstruction, any> = {
  inDry: WashTumbleDry,
  noInDry: WashDryCleanOff,
  bleachAllowed: Bleach,
  noBleachAllowed: NoBleach,
  washTemperature1: WashTemperature1,
  washDry1: WashDry1,
  iron1: Ironing1,
  iron2: Ironing2,
  noDryer: WashTumbleOff,
  handWash: HandWash,
};

export const washInstructionText: Partial<Record<WashInstruction, string>> = {
  washTemperature1: 'Lavar a máquina en temperatura fría y en ciclo delicado',
  inDry: 'Lavado en seco',
  noInDry: 'No lavar en seco.',
  handWash: 'Lavado a Mano',
  iron1: 'Planchar a temperatura baja',
  iron2: 'Planchar a temperatura alta',
  bleachAllowed: 'Permitir Blanqueador',
  noBleachAllowed: 'No Blanqueador',
  washDry1: 'Puede utilizarse secadora en tempratura baja',
  noDryer: 'No usar Secadora',
};

export const washInstructionToProgramRecommendation: Partial<Record<WashInstruction, string>> = {
  handWash: 'Lavado a Mano',
  washTemperature1: 'Ropa Deportiva',
  noDryer: 'Lana',
  iron1: 'Ropa Oscura',
  iron2: 'Algodón',
  bleachAllowed: 'Ropa Blanca',
};

export const extraWashDescriptions: Record<ExtraWashInstruction, string> = {
  withZippers: 'Wash with tight closures',
  noSoothing: 'Wash without soothing',
  washAndIronBackwards: 'Wash and iron backwards',
  similarColors: 'Wash with similar colors',
  softdetergent: 'Wash with soft detergent',
};

export const buttonStyles: Partial<Record<WashInstruction, any>> = {
  washTemperature1: { top: '75px', left: '270px', width: '40px', height: '40px' },
  handWash: { bottom: '80px', left: '10px', width: '60px', height: '20px' },
};
