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

export const postEventList = async (data) => {
  try {
    const response = await awsClient.post(
      `https://sandbox.overwolf.awardpool.co/v1/events`,
      data
    );
    if (response.status === 200 && response.data.ok === true) {
      if (response.data.stas != null) {
        console.log("Test 3");
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

export const getChallangesList = async (userId, gameId) => {
  try {
    const response = await awsClient.get(
      `https://sandbox.overwolf.awardpool.co/v1/challenges/${gameId}/${userId}`
    );
    console.log("getChallangesList response", response);

    if (
      response.status === 200 &&
      response.data.ok === true &&
      response.data.stas != null &&
      Array.isArray(response.data.stas) &&
      response.data.stas.length > 0
    ) {
      return response.data.stas;
    }
  } catch (e) {
    console.log(e);
  }
  return [];
};
