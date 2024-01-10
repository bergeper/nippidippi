import { type IChip } from "./IChip";
import { type IDip } from "./IDip";

export interface ICombination {
  id: string;
  name: string;
  rating: number;
  comboNr: string;
  chipId: string;
  dipId: string;
}
export interface IFullCombination {
  id: string;
  name: string;
  dip: IDip;
  chip: IChip;
  rating: number;
  comboNr: string;
  chipId: string;
  dipId: string;
}
