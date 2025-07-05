import type { WashMachineProgram, Wearable } from '@/lib/types';
import { washInstructionToProgramRecommendation } from '@/lib/wash-instructions';

function getRecommendedProgram(wearable: Wearable): WashMachineProgram | null {
  if (wearable.composition) {
    if (wearable.composition.denim) {
      return 'Jeans';
    }
    const cottonTotal =
      (wearable.composition.cotton || 0) + (wearable.composition.recycledCotton || 0);
    if (cottonTotal >= 80) {
      return 'Algodón';
    }
    if (wearable.composition.polyester && wearable.composition.polyester >= 80) {
      return 'Sintético';
    }
    if (wearable.composition.nylon && wearable.composition.nylon >= 80) {
      return 'Sintético';
    }
  }

  return (
    wearable.wash
      ?.map((w) => washInstructionToProgramRecommendation[w])
      .filter(Boolean)
      .find(Boolean) || null
  );
}

export default getRecommendedProgram;
