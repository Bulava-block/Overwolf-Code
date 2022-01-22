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
    console.log(data);
    const response = await awsClient.post(
      `https://sandbox.overwolf.awardpool.co/v1/events`,
      data
    );
    console.log(response, "Stas");

    if (response.data.status === "success") {
      return true;
    }
  } catch (e) {
    console.log(e);
  }
  return false;
};

export const getChallangesList = async (token, gameId) => {
  try {
    const response = await awsClient.get(
      `https://sandbox.overwolf.awardpool.co/v1/challenges/${token}/${gameId}`
    );
    console.log("What is this?", response);
    if (response.data.status === "success" && response.data.data != null) {
      return response.data.data;
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
