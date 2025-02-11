import React from "react";
type VideoItemWithHoverPureType = {
    src: string;
    innerRef: React.ForwardedRef<HTMLDivElement>;
    handleHover: (value: boolean) => void;
    premium: number;
    isTvod?: boolean;
    isSony?: boolean;
    isLive?: boolean;
    tile?: number;
    onClick: () => void;
};
declare const _default: React.ForwardRefExoticComponent<Omit<VideoItemWithHoverPureType, "innerRef"> & React.RefAttributes<HTMLDivElement>>;
export default _default;
