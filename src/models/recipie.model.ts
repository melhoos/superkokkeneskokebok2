import { RecipieType } from './recipieType.enum';
import { Ingredient } from './ingredient.model';

export interface Recipie {
  title: string;
  ingredients: Ingredient[];
  procedure: string[];
  types: RecipieType[];
  portions: string;
  credit?: string;
}
