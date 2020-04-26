// import Cookie from 'js-cookie';

class Auth {
  setToken(token) {
    localStorage.setItem("token", token, {
      expires: "1h",
    });
    return true;
  }

  getToken() {
    const token = localStorage.getItem("token");
    return token;
  }

  saveUser(user) {
    localStorage.setItem("auth_auth_user", JSON.stringify(user));
    return true;
  }

  getUser() {
    const user = localStorage.getItem("auth_auth_user");
    return user;
  }
}

export default new Auth();
