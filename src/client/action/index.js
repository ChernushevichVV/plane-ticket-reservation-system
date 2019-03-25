import { actionTypes } from "./actionTypes";

export function changeTripType(payload) {
  return { type: actionTypes.TRIP_TYPE_OPTION_CHANGE, payload };
}

export function changeDepartureAirport(payload) {
  return { type: actionTypes.DEPARTURE_AIRPORT_CHANGE, payload };
}

export function changeDestinationAirport(payload) {
  return { type: actionTypes.DESTINATION_AIRPORT_CHANGE, payload };
}
