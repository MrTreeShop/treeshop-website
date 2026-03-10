export interface County {
  name: string;
  slug: string;
  tier: number;
  miles: number;
  geo?: { latitude: number; longitude: number };
  driveTime: string;
  population: string;
  cities: string[];
  terrain: string;
  vegetation: string[];
  soilTypes: string;
  environmental: string;
  protectedSpecies: string[];
  waterways: string[];
  permits: string;
  projectTypes: string;
  demandDrivers: string;
  commonProjects: string[];
  transport: string;
  keywords: string;
  youtubeVideoId: string | null;
  serviceContent: Record<string, ServiceContent>;
}

export interface ServiceContent {
  intro: string;
  whyHere: string;
}

export interface Service {
  name: string;
  slug: string;
  desc: string;
  price: string;
  outcome: string;
}
