import axios from "axios";

//set base url
axios.defaults.baseURL = "https://inkognito-server.herokuapp.com/the/v1/vendor";

export const post = (url, options = {}) =>
  new Promise((resolve, reject) => {
    axios
      .post(url, options)
      .then((res) => resolve(res))
      .catch((err) => reject(err));
  });
