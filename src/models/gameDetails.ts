import { Platform } from "./Game";
import { Genre } from "./Genre";
import { Publisher } from "./Publisher";

export interface GameDetails {
  id: number;
  description_raw: string;
  name: string;
  parent_platforms: {
    platform: Platform;
  }[];
  metacritic: number;
  genres: Genre[];
  publishers: Publisher[];
}
