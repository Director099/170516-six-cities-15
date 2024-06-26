import {PreviewOfferProps} from '@/shared/types';

export enum SortingOptions {
  Popular = 'Popular',
  LowToHigh = 'Price: low to high',
  HighToLow = 'Price: high to low',
  TopRating = 'Top rated first'
}

export type SortingOptionsValuesType = `${SortingOptions}`;

export const sortByType = (listCities: PreviewOfferProps[], type: string) => {
  switch (type) {
    case SortingOptions.TopRating:
      return listCities.toSorted((itemA, itemB) => itemB.rating - itemA.rating);
    case SortingOptions.LowToHigh:
      return listCities.toSorted((itemA, itemB) => itemA.price - itemB.price);
    case SortingOptions.HighToLow:
      return listCities.toSorted((itemA, itemB) => itemB.price - itemA.price);
    default:
      return listCities.slice();
  }
};
