import { useEffect, useState } from "react";
import { handleAnonLogin } from "../utils/handleAnnonLogin";
import { GetCookiesValue } from "../utils/cookie";

export function useAnonToken() {
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    const fetchToken = async () => {
      handleAnonLogin();
      const temp = GetCookiesValue("jwtToken", false);
      setToken(temp);
    };

    fetchToken();
  }, []);

  return token;
}
