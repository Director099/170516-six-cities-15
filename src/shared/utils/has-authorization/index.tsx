import {useAppSelector} from "../../../app/app-store";
import {AuthorizationStatus} from "../../config";

export const hasAuthorization = () => {
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
  return authorizationStatus === AuthorizationStatus.Auth
}
