import {FC, ReactNode} from 'react';
import {Navigate} from 'react-router-dom';
import {Path} from '../../shared/config';
import {hasAuthorization} from "../../shared/utils";

type PrivateRouteProps = {
  children: ReactNode;
  redirectTo: Path
}

export const PrivateRoute:FC<PrivateRouteProps> = ({children,  redirectTo}) => (
  hasAuthorization()
    ? children
    : <Navigate to={redirectTo} />
);
