import Cookies from "js-cookie";
import axios from "axios";
import CryptoJS from "crypto-js";
// import AuthVerify from "../components/Custom/AuthVerify";
// import { ConnectQuery } from "../constants/userProfile";
import { Secret_key } from "../constants/constants";

const RequestMethod = {
  GET: "GET",
  POST: "POST",
  PUT: "PUT",
  DELETE: "DELETE",
};

const getJWTToken = async () => {
  const jwtToken = Cookies.get("jwt_token");
  console.log(jwtToken, "before edecrypting")
  if (jwtToken) {
    const decrypted = CryptoJS.AES.decrypt(jwtToken, Secret_key).toString(CryptoJS.enc.Utf8)
    console.log("Decrypted (Raw):", decrypted);
    console.log("Decrypted (Text):", decrypted.toString(CryptoJS.enc.Utf8));

    return JSON.parse(decrypted);
  } else {
    return undefined;
  }
};

const get = async (url) => callGetApi(RequestMethod.GET, url);

const post = async (url, params, header, formData) =>
  callPostApi(RequestMethod.POST, url, params, header, formData);

const put = async (url, params, header) =>
  callPutApi(RequestMethod.PUT, url, params, header);

const Delete = async (url) => callDeleteApi(RequestMethod.DELETE, url);


const callGetApi = async (requestMethod, url) => {
  try {
    let jwtToken = await getJWTToken();
    console.log(jwtToken, "jwtToken");

    const options = {
      method: requestMethod,
      headers: {
        "Authorization": `Bearer ${jwtToken}`,
      },
    };

    console.log(options, "options");

    const response = await axios(url, options);
    console.log(response, "dfdgfdggfd");


    return { response: response.data, status_code: response.status };
  } catch (error) {
    console.log(error, "error");
    // throw new Error("Invalid Response!");
    return { status_code: error.response.status, response: error.response.data };
  }
};

const callPostApi = async (requestMethod, url, params, header, formData) => {
  let jwtToken = await getJWTToken();
  console.log(params, "parmasdsadsds")
  let requestOptions;
  if (formData) {
    requestOptions = {
      method: requestMethod,
      body: params,
      mode: "cors",
      headers: {
        "Authorization": `Bearer ${jwtToken}`,
        "Content-Type": "multipart/form-data;boundary="
      },
    };
  } else {
    requestOptions = {
      method: requestMethod,
      body: params,
      mode: "cors",
      headers: {
        "Authorization": `Bearer ${jwtToken}`,
        "Content-Type": "application/json"
      },
    };
  }

  console.log(requestOptions, "requestOptions")

  return fetch(`${url}`, requestOptions)
    .then((response) => {
      const statusCode = response.status;

      return new Promise((resolve, reject) => {
        response
          .json()
          .then((response) => {
            resolve({ response, statusCode });
          })
          .catch((error) => {
            reject(error);
          });
      });
    })
    .catch((error) => {
      console.log(error, "error in catch")
    });
};

const callDeleteApi = async (requestMethod, url) => {
  let jwtToken = await getJWTToken();
  const DeleteOptions = {
    method: requestMethod,
    mode: "cors",
    headers: {
      "Authorization": `Bearer ${jwtToken}`,
    },
  };

  return fetch(`${url}`, DeleteOptions)
    .then((response) => {
      const statusCode = response.status;
      return new Promise((resolve, reject) => {
        response
          .json()
          .then((result) => {
            resolve({ result, statusCode });
          })
          .catch((error) => {
            reject("Invalid Response!");
          });
      });
    })
    .catch((error) => {

    });
};


const callPutApi = async (requestMethod, url, params, header) => {
  let jwtToken = await getJWTToken();
  let requestOptions = null;
  if (header) {
    requestOptions = {
      method: requestMethod,
      body: params,
      mode: "cors",
      headers: { "Authorization": `Bearer ${jwtToken}`, "Content-Type": "application/json" },
    };
  } else {
    requestOptions = {
      method: requestMethod,
      body: params,
      mode: "cors",
      headers: { "Authorization": `Bearer ${jwtToken}` },
    };
  }

  return fetch(`${url}`, requestOptions)
    .then((response) => {
      const statusCode = response.status;
      return new Promise((resolve, reject) => {
        response
          .json()
          .then((response) => {
            resolve({ response, statusCode });
          })
          .catch((error) => {
            reject("Invalid Response!");
          });
      });
    })
    .catch((error) => {

    });
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  get,
  post,
  put,
  Delete,
};
