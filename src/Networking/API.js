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
  formattedDate
) => {
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

const getAddWishlistProductData = (product_id, user_id) => {
  const header = true;
  const id = product_id;
  const param = JSON.stringify({
    userId: user_id,
  });
  return BaseApiService.post(
    BaseURL + APIRequests.toGetWishlistData + id,
    param,
    header
  );
}

const getForgetPassword = (email) => {
  const header = true;
  const param = JSON.stringify({
    email: email,
  });
  return BaseApiService.post(
    BaseURL + APIRequests.forgetPassword,
    param,
    header
  );
}

const getResetPassword = (password, token) => {
  const header = true;
  const param = JSON.stringify({
    password: password,
    token: token
  });
  return BaseApiService.post(
    BaseURL + APIRequests.resetPassword,
    param,
    header
  );
}

const postFeedback = (name, email, phone, subject, message) => {
  const header = true;
  const param = JSON.stringify({
    name: name,
    phone: `${phone}`,
    email: email,
    subject: subject,
    description: message
  });
  return BaseApiService.post(
    BaseURL + APIRequests.toGetFeedbacks,
    param,
    header
  );
}

const getFilteredData = (id, price) => {
  const header = true;
  const param = JSON.stringify({
    ids: id,
    price: `${price}`
  });
  return BaseApiService.post(
    BaseURL + APIRequests.toGetFilteredData,
    param,
    header
  );
}


const getSearchedProduct = (keyword) => {
  const header = true;
  const param = JSON.stringify({
    keywords: keyword,
  });
  return BaseApiService.post(
    BaseURL + APIRequests.toGetSearchedData,
    param,
    header
  );
}

const getCartData = (userid) => {
  const header = true;
  const id = userid;
  return BaseApiService.get(BaseURL + APIRequests.toGetCartData + id, header);
}

const getWishlistData = (userid) => {
  const header = true;
  const id = userid;
  return BaseApiService.get(BaseURL + APIRequests.toGetWishlistData + id, header);
}

const getBlogsData = () => {
  const header = true;
  return BaseApiService.get(BaseURL + APIRequests.toGetBlogs, header);
}

const getReviewsData = () => {
  const header = true;
  return BaseApiService.get(BaseURL + APIRequests.toGetReview, header);
}

const getBannerData = (category) => {
  const header = true;
  const name = `?category=${category}`
  return BaseApiService.get(BaseURL + APIRequests.toGetBanner + name, header);
}

const getOurPeoples = () => {
  const header = true;
  return BaseApiService.get(BaseURL + APIRequests.toGetOurPeople, header);
}

const deleteCartData = (orderid) => {
  const header = true;
  const id = orderid;
  return BaseApiService.Delete(BaseURL + APIRequests.toGetCartData + id, header);
}

const deleteWishlistProducts = (id) => {
  const header = true;
  const Id = id;
  return BaseApiService.Delete(BaseURL + APIRequests.toGetWishlistData + Id, header);
}

const getProductData = (id) => {
  const header = true;
  if (id) {
    return BaseApiService.get(BaseURL + APIRequests.toGetProductsData + id, header);
  } else {
    return BaseApiService.get(BaseURL + APIRequests.toGetProductsData, header);
  }
}

const getOneProductData = (product_id) => {
  const header = true;
  const id = product_id;
  return BaseApiService.get(BaseURL + APIRequests.toGetOneProductsData + id, header);
}

const getUserInfo = () => {
  const header = true;
  return BaseApiService.get(BaseURL + APIRequests.toGetUserInfo, header);
}

const updateUserInfo = (name, age, email, phonenumber) => {
  const header = true;
  const param = JSON.stringify({
    name: name,
    age: age,
    email: email,
    phonenumber: phonenumber
  });
  return BaseApiService.put(
    BaseURL + APIRequests.toUpdateUserInfo,
    param,
    header
  );
}

const uploadProfilePic = (image) => {
  const header = true;
  let fd = new FormData();
  fd.append("image", image);

  console.log(fd.get("image"), "fomras"); // Verify if the image is appended correctly
  for (var pair of fd.entries()) {
    console.log(pair, "paoirpairssss");
  }
  return BaseApiService.post(
    BaseURL + APIRequests.toUploadProfilePic,
    fd,
    header,
    "formData"
  );
}

export const API = {
  Login,
  Register,
  getCartData,
  getWishlistData,
  deleteCartData,
  getProductData,
  getAddCartProductData,
  getOneProductData,
  getForgetPassword,
  getResetPassword,
  getUserInfo,
  updateUserInfo,
  uploadProfilePic,
  getAddWishlistProductData,
  deleteWishlistProducts,
  getBlogsData,
  getReviewsData,
  getBannerData,
  getOurPeoples,
  postFeedback,
  getFilteredData,
  getSearchedProduct
};
