export type LocationProps = {
  latitude: number;
  longitude: number;
  zoom: number;
}

export type UserProp = {
  name: string
  avatarUrl: string
  isPro: boolean
  email: string
  token: string
}

export type NameCitiesProps = 'Paris' | 'Cologne' | 'Brussels' | 'Amsterdam' | 'Hamburg' | 'Dusseldorf';

export type PreviewCardProps = {
  id: string;
  title: string;
  type: 'apartment' | 'room' | 'house' | 'hotel';
  price: number;
  city?: {
    name: NameCitiesProps;
    location: LocationProps;
  };
  location?: LocationProps;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
  previewImage: string;
  className?: string;
  widthImg?: number;
  heightImg?: number;
}
