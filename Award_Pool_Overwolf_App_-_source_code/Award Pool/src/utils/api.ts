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
    accessKeyId: "AKIAYPDA4V42B7XSN64B",
    secretAccessKey: "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",
  }
);

awsClient.interceptors.request.use(interceptor);

export const postEventList = async (data, token) => {
  try {
    const response = await awsClient.post(
      `https://sandbox.overwolf.awardpool.co/v1/events`,
      data
    );
    if (response.status === 200 && response.data.ok === true) {
      if (response.data.stas != null) {
        console.log("Test 3", response.data.stas );
        return {
          success: true,
          stas: response.data.stas,
        };
      } else {
        return {
          success: true,
        };
      }
    }
  } catch (e) {
    console.log(e);
  }
  return {
    success: false,
  };
};

export const getChallangesList = async (token, gameId) => {
  try {
    const response = await awsClient.get(
      `https://sandbox.overwolf.awardpool.co/v1/challenges/${gameId}/${token}/current`
    );
    console.log("r", response);
    if (
      response.status === 200 &&
      response.data.stas != null &&
      response.data.ok === true
    ) {
      return [response.data.stas];
    }
  } catch (e) {
    console.log(e);
  }
  return [];
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

//https://sandbox.overwolf.awardpool.co/v1/challenges/637094340578x966760525515472300/10624
