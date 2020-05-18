function setToken(token) {
	localStorage.setItem("token", token, {
		expires: "1h",
	});
	return true;
}

function getToken() {
	const token = localStorage.getItem("token");
	return token;
}

function saveUser(user) {
	localStorage.setItem("auth_auth_user", JSON.stringify(user));
	return true;
}

function getUser() {
	const user = localStorage.getItem("auth_auth_user");
	return user;
}
export {
	setToken,
	getToken, 
	saveUser,
	getUser
}