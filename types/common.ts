interface Breed {
  id: string;
  name: string;
}

export interface CatBreedDetails extends Breed {
  weight: { imperial: string; metric: string };
  temperament: string;
  description: string;
  life_span: string;
  origin: string;
  indoor: number;
  lap: number;
  adaptability: number;
  affection_level: number;
  child_friendly: number;
  dog_friendly: number;
  energy_level: number;
  grooming: number;
  intelligence: number;
  health_issues: number;
  social_needs: number;
  stranger_friendly: number;
}

export interface ErrorResponse {
  message: string;
}

export interface CatBreedImageData extends Breed {
  description: string;
  url: string;
  width: number;
  height: number;
  breeds: CatBreedDetails[];
}
