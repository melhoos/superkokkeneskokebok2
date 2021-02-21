import { Unit } from './unit.enum';

export interface Ingredient {
  volum: number;
  unit: Unit;
  ingredientName: string;
  optional?: boolean;
}
