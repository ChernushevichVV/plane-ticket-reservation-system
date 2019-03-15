import { actionTypes } from "./actionTypes";

export function changeTripType(payload) {
  return { type: actionTypes.TRIP_TYPE_OPTION_CHANGE, payload };
}
