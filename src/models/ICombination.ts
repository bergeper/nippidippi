import { type IChip } from "./IChip";
import { type IDip } from "./IDip";

export interface ICombination {
  id: string;
  name: string;
  chip: IChip;
  dip: IDip;
  rating: number;
  comboNr: string;
  chipId: string;
  dipId: string;
}
