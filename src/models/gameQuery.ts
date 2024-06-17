import { Platform } from "./game";
import { Genre } from "./genre";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
}
