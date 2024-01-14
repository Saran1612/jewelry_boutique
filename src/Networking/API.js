"Use Strict";
import BaseApiService from "./BaseApiServices";
import { APIRequests, BaseURL } from "./NetworkConstants";


const Login = (email, password) => {
  const header = true;
  const param = JSON.stringify({
    email: email,
    password: password,
  });
  return BaseApiService.post(
    BaseURL + APIRequests.login,
    param,
    header
  );
};

const Register = (username,
  email,
  password,
  phonenumber,
  formattedDate) => {
  const header = true;
  const param = JSON.stringify({
    name: username,
    email: email,
    password: password,
    phonenumber: Number(phonenumber),
    age: formattedDate
  });
  return BaseApiService.post(
    BaseURL + APIRequests.register,
    param,
    header
  );
};

const getAddCartProductData = (product_id, user_id) => {
  const header = true;
  const id = product_id;
  const param = JSON.stringify({
    userId: user_id,
  });
  return BaseApiService.post(
    BaseURL + APIRequests.toGetCartData + id,
    param,
    header
  );
}

const getCartData = (userid) => {
  const header = true;
  const id = userid;
  return BaseApiService.get(BaseURL + APIRequests.toGetCartData + id, header);
}

const deleteCartData = (orderid) => {
  const header = true;
  const id = orderid;
  return BaseApiService.Delete(BaseURL + APIRequests.toGetCartData + id, header);
}

const getProductData = () => {
  const header = true;
  return BaseApiService.get(BaseURL + APIRequests.toGetProductsData, header);
}

const getOneProductData = (product_id) => {
  const header = true;
  const id = product_id;
  return BaseApiService.get(BaseURL + APIRequests.toGetProductsData + id, header);
}

export const API = {
  Login,
  Register,
  getCartData,
  deleteCartData,
  getProductData,
  getAddCartProductData,
  getOneProductData
};
