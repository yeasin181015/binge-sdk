export type Genre = {
  id: number;
  name: string;
};

export type Company = {
  description: string;
  headquarters: string;
  homepage: string;
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
  parent_company: null | object;
};

export type Country = {
  iso_3166_1: string;
  english_name: string;
};

export type Language = {
  iso_639_1: string;
  english_name: string;
  name: string;
};

export type Product = {
  id: number;
  name: string;
  maturity_level_id: number;
  thumb_path: string;
};

export type Appended_Video = {
  id: string;
  iso_639_1: string;
  iso_3166_1: string;
  key: string;
  name: string;
  official: boolean;
  published_at: string;
  site: string;
  size: number;
  type: string;
};

export type MovieDetail = {
  genre: any;
  adult: boolean;
  backdrop_path: string | null;
  belongs_to_collection: null;
  budget: number;
  genres: Genre[];
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string | null;
  production_companies: Company[];
  production_countries: Country[];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: Language[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  videos: { results: Appended_Video[] };
  vote_average: number;
  vote_count: number;
  hls_url: string;
  related_product: Product[];
  maturity_level_id: number;
  duration: number;
  synopsis: string;
  artists: string;
  image_landscape: string;
  image_square: string;
  image_portrait: string;
  thumb_path: string;
  content_type: string;
  is_wishlist: boolean;
  name: string;
  trailer_link?: string;
  avg_rating?: number;
  category: any;
  tv_channel_categories: any;
  published_year: string;
  sessionid?: string;
};

export type Movie = {
  poster_path: string | null;
  adult: boolean;
  overview: string;
  release_date: string;
  genre_ids: number[];
  id: number;
  original_title: string;
  original_language: string;
  title: string;
  backdrop_path: string | null;
  popularity: number;
  vote_count: number;
  video: boolean;
  vote_average: number;
  thumb_path: string;
  image_square: string;
  image_portrait: string;
  image_landscape: string;
  maturity_level_id: number;
  name: string;
  duration: number;
  description: string;
};
