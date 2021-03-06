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
    // live version
    // accessKeyId: "AKIAYPDA4V42G5JJZRFS",
    // secretAccessKey: "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",

    // testing version
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
// https://prod.overwolf.awardpool.co/v1/events
export const getChallangesList = async (userId, gameId) => {
  try {
    const response = await awsClient.get(
      `https://sandbox.overwolf.awardpool.co/v1/challenges/${gameId}/${userId}`
    );

    if (
      response.status === 200 &&
      response.data.ok === true &&
      response.data.stas != null &&
      Array.isArray(response.data.stas) &&
      response.data.stas.length > 0
    ) {
      return response.data.stas;
    }
    console.log("TESTING IFRAME!", response);
  } catch (e) {
    console.log(e);
  }
  return [];
};

export const checkOverwolfServiceByGameId = async (
  gameId: number
): Promise<boolean> => {
  try {
    const response = await awsClient.get(
      `https://game-events-status.overwolf.com/${gameId}_prod.json`
    );
    if (
      response.status === 200 &&
      response.data.state === 1 &&
      response.data.features != null &&
      Array.isArray(response.data.features) &&
      response.data.features.length > 0
    ) {
      return response.data.features.every(({ state }) => state === 1);
    }
  } catch (e) {
    console.log(e);
  }
  return false;
};
