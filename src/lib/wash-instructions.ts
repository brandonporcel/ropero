import type { ExtraWashInstruction, WashInstruction } from '@/lib/types';
import BleachAllowed from '@/components/icons/BleachAllowed.vue';
import DryClean from '@/components/icons/DryClean.vue';
import HandWash from '@/components/icons/HandWash.vue';
import Ironing1 from '@/components/icons/Ironing1.vue';
import Ironing2 from '@/components/icons/Ironing2.vue';
import NoBleachAllowed from '@/components/icons/NoBleachAllowed.vue';
import NoDryClean from '@/components/icons/NoDryClean.vue';
import NoTumbleDry from '@/components/icons/NoTumbleDry.vue';
import RemovePromptly from '@/components/icons/RemovePromptly.vue';
import TumbleDry from '@/components/icons/TumbleDry.vue';
import TumbleDryLow from '@/components/icons/TumbleDryLow.vue';
import WashTemperature1 from '@/components/icons/WashTemperature1.vue';

export const washIcons: Record<WashInstruction, any> = {
  bleachAllowed: BleachAllowed,
  noBleachAllowed: NoBleachAllowed,
  washTemperature1: WashTemperature1,
  iron1: Ironing1,
  iron2: Ironing2,
  handWash: HandWash,
  dryClean: DryClean,
  dryCleanHydrocarbons: DryClean,
  noDryClean: NoDryClean,
  removePromptly: RemovePromptly,
  tumbleDry: TumbleDry,
  noTumbleDry: NoTumbleDry,
  tumbleDryLow: TumbleDryLow,
};

export const washInstructionText: Record<WashInstruction, string> = {
  dryClean: 'Lavado en seco',
  dryCleanHydrocarbons: 'Lavado en seco con hidrocarburos',
  noDryClean: 'No lavar en seco.',
  tumbleDry: 'Usar secadora',
  tumbleDryLow: 'Usar secadora en baja temperatura',
  noTumbleDry: 'No usar secadora',
  removePromptly: 'Retirar inmediatamente tras lavado',
  washTemperature1: 'Lavar a máquina en temperatura fría y en ciclo delicado',
  handWash: 'Lavado a Mano',
  iron1: 'Planchar a temperatura baja',
  iron2: 'Planchar a temperatura alta',
  bleachAllowed: 'Permitir Blanqueador',
  noBleachAllowed: 'No usar blanqueador',
};

export const washInstructionToProgramRecommendation: Partial<Record<WashInstruction, string>> = {
  handWash: 'Lavado a Mano',
  washTemperature1: 'Ropa Deportiva',
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
