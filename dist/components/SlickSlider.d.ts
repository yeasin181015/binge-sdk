import { CategoryProps } from "../App";
export declare const LOCAL_BASE_URL = "https://web-api.binge.buzz";
interface SlickSliderProps {
    data: any[];
    categories: CategoryProps;
    totalProduct: number;
    handleNext: () => void;
    type?: string;
    visibleOverflow?: boolean;
}
export default function SlickSlider({ data, categories, totalProduct, handleNext, type, visibleOverflow, }: SlickSliderProps): import("react/jsx-runtime").JSX.Element;
export {};
