/* eslint-disable no-unused-vars */
import axios from "axios";
import { apiParamsType } from "@/app/interfaces/service/ApiCallParamsType";
// import { errorCodes } from "@/app/util/constant/apiErrorConstants";
// import Cookies from "js-cookie";

const navigate = (path: string) => {
  window.location.href = `${window.location.origin}/${path}`;
};

export enum apiMethods {
  GET = "GET",
  POST = "POST",
  PUT = "PUT",
  PATCH = "PATCH",
}

export const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_SERVER_URL,
  //withCredentials: true,
  headers: {
    Accept: "application/json",
  },
});

axiosInstance.interceptors.request.use(
  (request) => {
    return request;
  },
  (error) => {
    return Promise.reject(error);
  },
);

axiosInstance.interceptors.response.use(
  (request) => {
    return request;
  },
  (error) => {
    if (error?.response?.status === statusCode.internal_server_error) {
      navigate("network-error");
    } else if (error?.response?.status === statusCode.unauthorized_user) {
      // if (error?.response?.data?.messageCode !== errorCodes.er004) {
        navigate("login");
      // }
      return error?.response;
    }
    return error?.response;
  },
);

export const apiCall = async (params: apiParamsType) => {
  let authHeader = {
    Authorization: `Bearer ${sessionStorage.getItem("accessToken") ?? ""}`,
    // AuthorizationRefresh: `Bearer ${Cookies.get("refresh_token") ?? ""}`,
  };
  switch (params.method) {
    case apiMethods.GET: {
      const response = await axiosInstance({
        method: params.method,
        url: params.endPoint,
        headers: authHeader,
      });
      // const refreshToken = response?.headers["refresh_token"];
      // const token = response?.headers["token"];
      // if (token && refreshToken) {
      //   Cookies.set("token", token);
      //   Cookies.set("refresh_token", refreshToken);
      // }
      return { data: response?.data, status: response?.status };
    }
    case apiMethods.POST:
    case apiMethods.PATCH:
    case apiMethods.PUT: {
      let response = await axiosInstance({
        method: params.method,
        url: params.endPoint,
        data: params.data,
        headers: authHeader,
      });
      return { data: response?.data, status: response?.status };
    }
  }
};
export const statusCode = {
  success: 200,
  inserted: 201,
  bad_request: 400,
  not_found: 404,
  internal_server_error: 500,
  unauthorized_user: 401,
};
