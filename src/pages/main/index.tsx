import {useState} from 'react';
import classNames from 'classnames';
import {useAppSelector} from '../../app/app-store';
import {Places, CitiesEmpty} from './ui';
import {useGetOffersQuery} from './api';
import {cities} from '../../shared/mock';
import {VisuallyHidden} from '../../shared/utils';
import {PreviewCardProps} from '../../shared/types';
import {Loader, Map} from '../../shared';
import {Locations} from '../../entities';

export const Main = () => {
  const { data, isLoading } = useGetOffersQuery();
  const currentCity = useAppSelector((state) => state.currentCity);
  const [selectedPoint, setSelectedPoint] = useState<string>();
  const handleListItemHover = (selectedCardId: PreviewCardProps['id']) => setSelectedPoint(selectedCardId);
  const filterOffers = data?.filter(({city}) => city?.name === currentCity) ?? [];
  const hasPlaces: boolean = !!data;

  const classNamePage = classNames(
    'page__main page__main--index',
    {'page__main--index-empty': !hasPlaces}
  );
  const classNameCities = classNames(
    'cities__places-container container',
    {'cities__places-container--empty': !hasPlaces}
  );

  //TODO: много тернарников, надо проще
  return (
    <main className={classNamePage}>
      <VisuallyHidden tagName="h1">Cities</VisuallyHidden>
      <Locations currentCity={currentCity}/>
      <div className="cities">
        {isLoading ? <Loader/> :
          <div className={classNameCities}>
            {hasPlaces ?
              <Places
                numberPlacesToStay={filterOffers.length}
                nameCity={currentCity}
                onListItemHover={handleListItemHover}
                listOffers={filterOffers}
              /> : <CitiesEmpty/>}
            <div className="cities__right-section">
              {hasPlaces &&
                <Map
                  className="cities__map"
                  location={cities[0].location}
                  points={filterOffers}
                  selectedPoint={selectedPoint}
                />}
            </div>
          </div>}
      </div>
    </main>
  );
};
