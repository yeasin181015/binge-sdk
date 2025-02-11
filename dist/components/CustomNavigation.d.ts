import { MouseEventHandler, ReactNode } from "react";
interface CustomNaviationProps {
    isEnd: boolean;
    arrowWidth: number;
    children: ReactNode;
    activeSlideIndex: number;
    onNext: MouseEventHandler<HTMLDivElement>;
    onPrevious: MouseEventHandler<HTMLDivElement>;
}
export default function CustomNavigation({ isEnd, onNext, children, onPrevious, arrowWidth, activeSlideIndex, }: CustomNaviationProps): import("react/jsx-runtime").JSX.Element;
export {};
