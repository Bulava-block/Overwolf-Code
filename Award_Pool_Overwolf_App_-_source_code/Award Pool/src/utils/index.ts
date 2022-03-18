import CryptoJS from "crypto-js";
import { getToken } from "./api";

function deleteAllCookies() {
  var cookies = document.cookie.split(";");

  for (var i = 0; i < cookies.length; i++) {
    var cookie = cookies[i];
    var eqPos = cookie.indexOf("=");
    var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
    document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
  }
}

const getTokenByEncryptedMessage = async (message) => {
  const secret = "UFhQ9WH2rvKdgHXAxYL5";
  const bytes = CryptoJS.AES.decrypt(message, secret);
  const jsonText = bytes.toString(CryptoJS.enc.Utf8);
  const jsonData = JSON.parse(jsonText);
  console.log(jsonData);
  if (
    jsonData != null &&
    jsonData.state != null &&
    jsonData.state === "login"
  ) {
    const token = await getToken(jsonData.email, jsonData.password);
    if (token != null) {
      console.log("TOKEN", token);
      return { token, userId: jsonData.UID, email: jsonData.email };
    }
  }
  return {};
};

export { deleteAllCookies, getTokenByEncryptedMessage };
