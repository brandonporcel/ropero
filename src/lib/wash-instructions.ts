import type { ExtraWashInstruction, WashInstruction, WashMachineProgram } from '@/lib/types';
import BleachAllowed from '@/components/icons/BleachAllowed.vue';
import DryClean from '@/components/icons/DryClean.vue';
import DryInPosition from '@/components/icons/DryInPosition.vue';
import HandWash from '@/components/icons/HandWash.vue';
import Ironing1 from '@/components/icons/Ironing1.vue';
import Ironing2 from '@/components/icons/Ironing2.vue';
import NoBleachAllowed from '@/components/icons/NoBleachAllowed.vue';
import NoDryClean from '@/components/icons/NoDryClean.vue';
import NoIron from '@/components/icons/NoIron.vue';
import NoTumbleDry from '@/components/icons/NoTumbleDry.vue';
import Perchloroethylene from '@/components/icons/Perchloroethylene.vue';
import RemovePromptly from '@/components/icons/RemovePromptly.vue';
import TumbleDry from '@/components/icons/TumbleDry.vue';
import TumbleDryLow from '@/components/icons/TumbleDryLow.vue';
import TumbleDryNormal from '@/components/icons/TumbleDryNormal.vue';
import TumbleHang from '@/components/icons/TumbleHang.vue';
import WashTemperature1 from '@/components/icons/WashTemperature1.vue';
import WaterRunOff from '@/components/icons/WaterRunOff.vue';

export const washIcons: Record<WashInstruction, any> = {
  bleachAllowed: BleachAllowed,
  noBleachAllowed: NoBleachAllowed,
  washTemperature1: WashTemperature1,
  iron1: Ironing1,
  iron2: Ironing2,
  noIron: NoIron,
  handWash: HandWash,
  dryClean: DryClean,
  dryCleanHydrocarbons: DryClean,
  dryInPosition: DryInPosition,
  tumbleHang: TumbleHang,
  noDryClean: NoDryClean,
  removePromptly: RemovePromptly,
  tumbleDry: TumbleDry,
  tumbleDryLow: TumbleDryLow,
  tumbleDryNormal: TumbleDryNormal,
  noTumbleDry: NoTumbleDry,
  waterRunOff: WaterRunOff,
  perchloroethylene: Perchloroethylene,
};

export const washInstructionText: Record<WashInstruction, string> = {
  dryClean: 'Lavado en seco',
  tumbleHang: 'Secado suspendido',
  dryCleanHydrocarbons: 'Lavado en seco con hidrocarburos',
  noDryClean: 'No lavar en seco.',
  tumbleDry: 'Usar secadora',
  dryInPosition: 'Secar prenda en esa posición',
  tumbleDryLow: 'Usar secadora en baja temperatura',
  tumbleDryNormal: 'Usar secadora en temperatura normal',
  noTumbleDry: 'No usar secadora',
  removePromptly: 'Retirar inmediatamente tras lavado',
  washTemperature1: 'Lavar a máquina en temperatura fría y en ciclo delicado',
  handWash: 'Lavado a Mano',
  iron1: 'Planchar a temperatura baja',
  iron2: 'Planchar a temperatura alta',
  bleachAllowed: 'Permitir Blanqueador',
  noBleachAllowed: 'No usar blanqueador',
  noIron: 'No usar plancha',
  waterRunOff: 'Dejar escurrir el agua',
  perchloroethylene: 'Se puede usar percloroetileno',
};

export const washInstructionToProgramRecommendation: Partial<
  Record<WashInstruction, WashMachineProgram>
> = {
  handWash: 'Lavado a Mano',
  washTemperature1: 'Ropa Deportiva',
  iron2: 'Algodón',
};

export const extraWashDescriptions: Record<ExtraWashInstruction, string> = {
  withZippers: 'Wash with tight closures',
  noSoothing: 'Wash without soothing',
  similarColors: 'Wash with similar colors',
};

export const buttonStyles: Partial<Record<WashInstruction, any>> = {
  washTemperature1: { top: '75px', left: '270px', width: '40px', height: '40px' },
  handWash: { bottom: '80px', left: '10px', width: '60px', height: '20px' },
};
