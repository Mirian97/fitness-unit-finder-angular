import { Location } from './location.type';

export type UnitsResponse = {
  current_country_id: number;
  locations: Location[];
};
