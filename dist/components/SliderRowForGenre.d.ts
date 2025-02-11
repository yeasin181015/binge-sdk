export declare enum MEDIA_TYPE {
    Movie = "movie",
    Tv = "tv"
}
interface CategoryProps {
    id?: number;
    category_id: number;
    category_type: "vod" | "tv_channel" | "ad_category" | "tvod";
    position?: number;
    tile_type?: number;
    page_size?: number;
    page_id?: number;
    order_by?: any;
    created_at?: string;
    updated_at?: string;
    name?: string;
    ad_type?: number;
    target_user?: number;
}
interface DataProps {
    id?: number;
}
export interface RowProps {
    token: string;
    key: number;
    category?: CategoryProps;
    type?: string;
    data?: DataProps;
    visibleOverflow?: boolean;
    tile?: number;
}
export type Genre = {
    id: number;
    name: string;
};
export type CustomGenre = {
    id?: number;
    name: string;
    apiString: string;
};
export default function SliderRowForGenre(props: RowProps): import("react/jsx-runtime").JSX.Element;
export {};
