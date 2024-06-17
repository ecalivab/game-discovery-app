export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

export interface FetchGenreResponse {
  count: number;
  results: Genre[];
}
