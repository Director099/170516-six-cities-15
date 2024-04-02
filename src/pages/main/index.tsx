import {useSearchParams} from "react-router-dom";
import {useEffect, useState} from 'react';
import classNames from 'classnames';
import {useAppDispatch, useAppSelector} from '@/app/app-store';
import {getAuthCheckedStatus, VisuallyHidden} from '@/shared/utils';
import {PreviewOfferProps} from '@/shared/types';
import {Status} from '@/shared/config';
import {Loader, Map} from '@/shared';
import {Locations} from '@/entities';
import {fetchOffersAction} from './api';
import {Places, CitiesEmpty} from './ui';

export const Main = () => {
  const dispatch = useAppDispatch();
  const [searchParams] = useSearchParams();
  const isAuth = useAppSelector(getAuthCheckedStatus);
  const locationParams = searchParams.get("location");

  useEffect(() => {
    dispatch(fetchOffersAction());
  }, [dispatch]);

  const {list, status} = useAppSelector((state) => state.offers);
  const isLoading = Status.Resolved !== status;
  const [selectedPoint, setSelectedPoint] = useState<string>();
  const handleListItemHover = (selectedCardId: PreviewOfferProps['id']) => setSelectedPoint(selectedCardId);
  const filterOffers = list.filter(({city}) => city.name === locationParams);
  const hasPlaces: boolean = !!list.length && !!filterOffers.length;

  const classNamePage = classNames(
    'page__main page__main--index',
    {'page__main--index-empty': !hasPlaces}
  );
  const classNameCities = classNames(
    'cities__places-container container',
    {'cities__places-container--empty': !hasPlaces}
  );

  if (isLoading) {
    return (
      <main className={classNamePage}>
        <Loader/>
      </main>
    );
  }

  return (
    <main className={classNamePage}>
      <VisuallyHidden tagName="h1">Cities</VisuallyHidden>
      <Locations currentCity={locationParams}/>
      <div className="cities">
        <div className={classNameCities}>
          {hasPlaces ?
            <Places
              numberPlacesToStay={filterOffers.length}
              nameCity={locationParams}
              onListItemHover={handleListItemHover}
              offers={filterOffers}
              isAuth={isAuth}
            /> : <CitiesEmpty/>}
          <div className="cities__right-section">
            {hasPlaces &&
              <Map
                className="cities__map"
                city={filterOffers[0].city}
                points={filterOffers}
                selectedPoint={selectedPoint}
              />}
          </div>
        </div>
      </div>
    </main>
  );
};
