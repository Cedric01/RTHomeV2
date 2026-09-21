export interface Property {
  id?: number;

  title: string;
  address: string;
  description?: string;

  locationId: number;
  listingTypeId: number;
  agentId: number;
  priceRangeId?: number;

  isForRent: boolean;
  price: number;
  pricePeriod?: 'month' | 'sale';

  squareFeet?: number;
  bedrooms?: number;
  bathrooms?: number;

  // Property Details
  furnishing?: string;
  yearBuilt?: number;
  floor?: string;
  garage?: number;
  ceilingHeight?: string;
  renovation?: string;

  // Utility Details
  heating?: string;
  hasIntercom?: boolean;
  hasAirCondition?: boolean;
  windowType?: string;
  hasFireplace?: boolean;
  hasCableTv?: boolean;
  hasElevator?: boolean;
  hasWifi?: boolean;
  hasVentilation?: boolean;

  // Outdoor Features
  parkingSpots?: number;
  gardenSize?: string;
  disabledAccess?: string;
  hasSwimmingPool?: boolean;
  hasFence?: boolean;
  security?: string;
  isPetFriendly?: boolean;

  status?: 'ACTIVE' | 'SOLD' | 'RENTED';
  createdAt?: string;
  imageUrls?: string[];
}
