import { actionTypes } from "./actionTypes";

export function changeFlightSearchOption(payload) {
  return { type: actionTypes.FLIGHT_SEARCH_OPTION_CHANGE, payload };
}
