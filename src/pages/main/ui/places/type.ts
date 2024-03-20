import {NameCitiesProps, PreviewCardProps} from '../../../../shared/types';

export type PlacesProps = {
  numberPlacesToStay: number;
  nameCity: NameCitiesProps;
  onListItemHover?: (id: string) => void;
  listOffers: PreviewCardProps[];
};
