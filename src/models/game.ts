export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  slug: string;
  background_image: string;
  parent_platforms: {
    platform: Platform;
  }[];
  metactritic: number;
}

export interface FetchGamesResponse {
  count: number;
  results: Game[];
}
