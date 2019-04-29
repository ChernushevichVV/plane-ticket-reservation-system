import React, { Component, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import getCurrentStep from "./getCurrentStep";

// const styles = theme => ({
//   // root: {
//   //   width: "90%"
//   // },
//   // button: {
//   //   marginRight: theme.spacing.unit
//   // },
//   // instructions: {
//   //   marginTop: theme.spacing.unit,
//   //   marginBottom: theme.spacing.unit
//   // }
// });

function getSteps() {
  return [
    "Flight selection",
    "Seat selection",
    "Luggage",
    "Personal data",
    "Payment",
    "Confirmation"
  ];
}

const BookingBar = props => {
  const [activeStep, setActiveStep] = useState(0);
  const { history } = props;
  useEffect(() => {
    setActiveStep(getCurrentStep(history));
  }, [props]);

  const steps = getSteps();

  return (
    <div className="booking-bar">
      {/* <div className={classes.root}> */}
      <Stepper activeStep={activeStep} alternativeLabel={false}>
        {steps.map(label => {
          const props = {};
          const labelProps = {};

          return (
            <Step key={label} {...props}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
    </div>
  );
};

BookingBar.propTypes = {
  classes: PropTypes.object,
  history: PropTypes.object
};
export default BookingBar;
//export default withStyles(styles)(BookingBar);
