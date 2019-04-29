const STEPS = {
  "/booking/flight": 0,
  "/booking/seat": 1,
  "/booking/luggage": 2
  //   "/booking/": 3,
  //   "/booking/": 4,
  //   "/booking/": 5
};

const getCurrentStep = history => {
  return STEPS[history.location.pathname];
};

export default getCurrentStep;
