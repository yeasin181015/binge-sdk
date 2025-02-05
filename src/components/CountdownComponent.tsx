import React from "react";
import { motion } from "framer-motion";
import Countdown, { zeroPad } from "react-countdown";
import { Box } from "@mui/material";

const CountDownComponent: React.FC<{ dateTObe: string }> = ({ dateTObe }) => {
  // Define your countdown date here
  const countdownDate = new Date(dateTObe);

  // Define your countdown renderer
  const renderer = ({ days, hours, minutes, seconds }: any) => {
    return (
      <div>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <span>{days}</span>
          <span>{hours}</span>
          <span>{minutes}</span>
          <span>{seconds}</span>
        </motion.div>
      </div>
    );
  };

  return (
    <div>
      <Countdown
        date={countdownDate}
        renderer={({ days, hours, minutes, seconds }) => {
          const timer = [days, hours, minutes, seconds];
          const timerTitle = ["Days", "Hours", "Minutes", "Seconds"];
          return (
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                gap: {
                  xs: "5px",
                  md: "32px",
                },
                mb: "32px",
                height: "100%",
              }}
            >
              {timer.map((time, index) => (
                <Box
                  key={index}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center",
                  }}
                >
                  <Box
                    component="span"
                    sx={{
                      width: { xs: "40px", md: "90px" },
                      fontSize: {
                        xs: "36px",
                        md: "76px",
                      },
                      p: "16px",
                      mb: {
                        xs: "4px",
                        md: "8px",
                      },
                      backgroundColor: "#00000050",
                      borderRadius: "6px",
                    }}
                  >
                    {zeroPad(time)}
                  </Box>
                  <Box
                    component="span"
                    sx={{
                      fontSize: {
                        xs: "10px",
                        md: "24px",
                      },
                      fontWeight: "bold",
                      textTransform: "uppercase",
                    }}
                  >
                    {timerTitle[index]}
                  </Box>
                </Box>
              ))}
            </Box>
          );
        }}
      />
    </div>
  );
};

export default CountDownComponent;
