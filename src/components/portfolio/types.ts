
export interface PortfolioImage {
  id: number;
  alt: string;
  caption: string;
  src?: string;
}

export interface PortfolioItem {
  id: number;
  client: string;
  problem: string;
  solution: string;
  colorClass: string;
  imageText: string;
  detailedDescription: string;
  services: string[];
  isCTA?: boolean;
  coverImage?: string;
  images: PortfolioImage[];
}
