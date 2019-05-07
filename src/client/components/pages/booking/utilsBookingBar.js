const STEPS = {
  "/booking/flight": 0,
  "/booking/seat": 1,
  "/booking/luggage": 2
  //   "/booking/": 3,
  //   "/booking/": 4,
  //   "/booking/": 5
};

//next attribute was added later in order to use
//this function in NextButton component
export const getCurrentStep = (history, next = 0) => {
  return STEPS[history.location.pathname] + next;
};

export const getLink = number => {
  return Object.keys(STEPS).find(key => STEPS[key] === number);
};

export const getSteps = () => {
  return [
    "Flight selection",
    "Seat selection",
    "Luggage",
    "Personal data",
    "Payment",
    "Confirmation"
  ];
};
