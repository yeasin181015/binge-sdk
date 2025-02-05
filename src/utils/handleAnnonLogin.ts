import { SetCookiesValue } from "./cookie";
import { User, AuthError } from "firebase/auth";
import { firebaseAnonymousSignIn } from "../config/firebaseConfig";

export const handleAnonLogin = async () => {
  const timeoutPromise = new Promise((_, reject) =>
    setTimeout(() => reject("Timeout"), 5000)
  );
  const apiPromise = firebaseAnonymousSignIn();

  try {
    const res: User | AuthError | any = await Promise.race([
      apiPromise,
      timeoutPromise,
    ]);

    if (res === "Timeout") {
      console.error("API call timed out");
      window.location.href = "/login";
      return null;
    }

    const response = await fetch(
      "https://web-api.binge.buzz/api/v3/oauth/verify/login/anon",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Device-Type": "web",
        },
        body: JSON.stringify({
          access_token: res.accessToken,
          uid: res.uid,
        }),
      }
    );

    const responseData = await response.json();

    if (responseData?.token) {
      SetCookiesValue("jwtToken", responseData.token, 1, false);
      sessionStorage.setItem("jwtToken", responseData.token);
      return responseData.token;
    } else {
      return null;
    }
  } catch (err) {
    console.error("Error during anonymous login:", err);
    return null;
  }
};
