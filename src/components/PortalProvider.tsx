import { ReactNode, useState, useCallback } from "react";
import createSafeContext from "../lib/createSafeContext";

export interface ProductType {
  is_wishlist: boolean;
  id: number;
  name: string;
  director: string;
  thumb_path: string;
  image_square: string;
  image_landscape: string;
  image_portrait: string | null;
  duration: number;
  description?: string;
  intro_start_time: number;
  intro_end_time: number;
  closing_start_time: number;
  content_type: string;
  free_or_premium: number;
  avg_rating: number;
  dash_url: string;
  hls_url?: string;
  hls_link?: string;
  is_encrypted: number;
  is_rabbithole_pack: number;
  maturity_level_id: number;
  artists: string;
  content_type_id: number;
  tvod_ids: [];
  tvod_details?: any;
  synopsis?: string;
  category?: any;
  trailer_link?: string;
  published_year?: string;
  genre: { title: string }[];
  cine_id?: string;
  sessionid?: string;
  is_tsports_content?: number;
  tsportsRedirectionUrl?: string;
  sony_id?: any;
  sonyliveRedirectionUrl?: string;
  is_live?: boolean;
}

export interface PortalConsumerProps {
  setPortal: (anchor: HTMLElement | null, vidoe: ProductType | null) => void;
}
export interface PortalDataConsumerProps {
  anchorElement: HTMLElement | null;
  miniModalMediaData: ProductType | null;
}

export const [usePortal, Provider] =
  createSafeContext<PortalConsumerProps["setPortal"]>();

export const [usePortalData, PortalDataProvider] =
  createSafeContext<PortalDataConsumerProps>();

export default function PortalProvider({ children }: { children: ReactNode }) {
  const [anchorElement, setAnchorElement] = useState<HTMLElement | null>(null);
  const [miniModalMediaData, setMiniModalMediaData] =
    useState<ProductType | null>(null);
  const handleChangePortal = useCallback(
    (anchor: HTMLElement | null, video: ProductType | null) => {
      setMiniModalMediaData(null);
      setAnchorElement(anchor);
      setMiniModalMediaData(video);
    },
    []
  );

  return (
    <Provider value={handleChangePortal}>
      <PortalDataProvider
        value={{
          anchorElement,
          miniModalMediaData,
        }}
      >
        {children}
      </PortalDataProvider>
    </Provider>
  );
}
