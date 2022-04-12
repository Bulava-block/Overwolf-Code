import CryptoJS from "crypto-js";

function deleteAllCookies() {
  var cookies = document.cookie.split(";");

  for (var i = 0; i < cookies.length; i++) {
    var cookie = cookies[i];
    var eqPos = cookie.indexOf("=");
    var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
    document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
  }
}

const getCredentialsByEncryptedMessage = async (message) => {
  let userId = undefined;
  try {
    const messageString = atob(message);
    const parsedMessage = JSON.parse(messageString);
    if (parsedMessage != null && parsedMessage.UID != null) {
      userId = parsedMessage.UID;
    }
  } catch (error) {
    console.log("Error decoding message: ", error);
  }
  return {
    userId,
  };
};

export { deleteAllCookies, getCredentialsByEncryptedMessage };
