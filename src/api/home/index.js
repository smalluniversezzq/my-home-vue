import server from "../axiosConfig";

// get 方式
export const getHeweather = function(params) {
  return server({
    method: "get",
    url: "/s6/weather/",
    params: params,
    timeout: 5000
  });
};

// post 方式
// export const post = function(data) {
//   return server({
//     method: "post",
//     url: "/user/12345",
//     data: data,
//     timeout: 5000
//   });
// };


