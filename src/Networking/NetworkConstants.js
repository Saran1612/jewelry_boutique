const BaseURL = "http://localhost:4000";

const APIRequests = {
  login: "/auth/login",
  register: "/auth/register",
  toGetCartData: "/orders/",
  toGetProductsData: "/products/",
  toGetOneProductsData: "/products/unique/",
  forgetPassword: "/auth/forget-password",
  resetPassword: "/auth/reset-password",
  toGetUserInfo: "/auth/user-info",
  toUpdateUserInfo: "/auth/update-user",
  toUploadProfilePic: "/auth/upload-avatar",
  toGetWishlistData: "/wishlist/"
};

export { BaseURL, APIRequests };
