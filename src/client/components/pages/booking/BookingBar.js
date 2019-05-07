import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import { getCurrentStep, getLink, getSteps } from "./utilsBookingBar";
import LinkContainer from "../../misc/LinkContainer";

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

const BookingBar = props => {
  const [activeStep, setActiveStep] = useState(0);
  const { history } = props;

  useEffect(() => {
    setActiveStep(getCurrentStep(history));
  }, [props]);

  const steps = getSteps();

  const alternativeLabel = window.innerWidth > 480 && window.innerWidth < 768;

  return (
    <div className="booking-bar">
      {/* <div className={classes.root}> */}
      <Stepper activeStep={activeStep} alternativeLabel={alternativeLabel}>
        {steps.map((label, index) => {
          const props = {};
          const labelProps = {};
          const link = getLink(index);
          label = window.innerWidth < 480 ? "" : label;
          return (
            <Step key={label} {...props}>
              <StepLabel {...labelProps}>
                <LinkContainer link={link} label={label} />
              </StepLabel>
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
