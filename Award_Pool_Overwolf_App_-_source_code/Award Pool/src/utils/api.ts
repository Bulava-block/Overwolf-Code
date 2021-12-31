import axios from "axios";
import * as querystring from "querystring";
import { aws4Interceptor } from "aws4-axios";

const awsClient = axios.create();

const interceptor = aws4Interceptor(
  {
    region: "us-east-2",
    service: "execute-api",
    signQuery: true,
  },
  {
    accessKeyId: "AKIAYPDA4V42OZHYQBZS",
    secretAccessKey: "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",
  }
);

awsClient.interceptors.request.use(interceptor);

export const postEventList = async (data, token) => {
  try {
    console.log(data);
    //alert('OW-App Send event list: ' + JSON.stringify(data));
    const response = await awsClient.post(
      `https://sandbox.api.awardpool.co/overwolf`,
      data
    );
    console.log(response);
    if (response.data.status === "success") {
      return true;
    }
  } catch (e) {
    console.log(e);
  }
  return false;
};

export const getToken = async (email, password): Promise<string> => {
  try {
    const response = await axios.post(
      `https://app.awardpool.com/version-staging/api/1.1/wf/login`,
      querystring.stringify({ email, password }),
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );
    console.log(response);
    if (response.data.status === "success") {
      return response.data.response.token;
    }
  } catch (e) {
    console.log(e);
    return "";
  }
};
