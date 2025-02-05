import Cookies from "js-cookie";
import CryptoJS from "crypto-js";

const secretPass = "XkhZG4fW2t2W";

export function GetCookiesValue(key: string, isEncrypted = false) {
  try {
    if (!isEncrypted) {
      return Cookies.get(key) ? Cookies.get(key) : undefined;
    }
    const cookieValue = Cookies.get(key);
    if (cookieValue === undefined) {
      return undefined;
    }
    const bytes = CryptoJS.AES.decrypt(cookieValue, secretPass);
    return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
  } catch (e) {
    Cookies.remove(key);
  }
}

export function SetCookiesValue(
  key: string,
  value: string,
  expires = 1,
  isEncrypted = false
) {
  try {
    if (value === undefined || null) {
      return;
    }
    if (!isEncrypted) {
      return Cookies.set(key, value, { expires });
    }
    const encryptedValue = CryptoJS.AES.encrypt(
      typeof value === "object" ? JSON.stringify(value) : value,
      secretPass
    ).toString();
    return Cookies.set(key, encryptedValue, { expires });
  } catch (e) {
    // eslint-disable-next-line no-console
    // console.log(e);
  }
}
