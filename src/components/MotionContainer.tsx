import { motion } from "framer-motion";
import Box, { BoxProps } from "@mui/material/Box";

export const varWrapBoth = {
  animate: {
    transition: { staggerChildren: 0.07, delayChildren: 0.1 },
  },
  exit: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
      delayChildren: 0.1,
    },
  },
};

interface MotionContainerProps extends BoxProps {
  initial?: boolean | string;
  open?: boolean;
}

export default function MotionContainer({
  open,
  children,
  ...other
}: MotionContainerProps) {
  return (
    <Box
      // initial={open}
      variants={varWrapBoth}
      component={motion.div}
      animate={open ? "animate" : "exit"}
      {...other}
    >
      {children}
    </Box>
  );
}
