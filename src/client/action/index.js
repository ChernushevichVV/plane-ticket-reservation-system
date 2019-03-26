import { actionTypes } from "./actionTypes";

export function changeTripType(payload) {
  return { type: actionTypes.TRIP_TYPE_OPTION_CHANGE, payload };
}

export function changeAirport(payload, placeholder) {
  return placeholder === "From"
    ? { type: actionTypes.DEPARTURE_AIRPORT_CHANGE, payload }
    : { type: actionTypes.DESTINATION_AIRPORT_CHANGE, payload };
}
