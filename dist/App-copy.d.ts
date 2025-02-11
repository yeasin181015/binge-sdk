import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export interface CategoryProps {
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
declare function App(): import("react/jsx-runtime").JSX.Element;
export default App;
