import { BoxProps } from "@mui/material/Box";
export declare const varWrapBoth: {
    animate: {
        transition: {
            staggerChildren: number;
            delayChildren: number;
        };
    };
    exit: {
        transition: {
            staggerChildren: number;
            staggerDirection: number;
            delayChildren: number;
        };
    };
};
interface MotionContainerProps extends BoxProps {
    initial?: boolean | string;
    open?: boolean;
}
export default function MotionContainer({ open, children, ...other }: MotionContainerProps): import("react/jsx-runtime").JSX.Element;
export {};
