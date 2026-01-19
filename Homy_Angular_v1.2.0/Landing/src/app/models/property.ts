export interface Property {
  id?: number;

  title: string;
  address: string;

  locationId: number;
  listingTypeId: number;
  agentId: number;

  isForRent: boolean;
  price: number;
  pricePeriod?: 'month' | 'sale';

  squareFeet?: number;
  bedrooms?: number;
  bathrooms?: number;

  status?: 'ACTIVE' | 'SOLD' | 'RENTED';
  createdAt?: string;
}
