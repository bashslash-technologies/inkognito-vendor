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

function removeToken() {
	localStorage.removeItem("token");
	return true;
}

function setUser(user) {
	localStorage.setItem("auth_auth_user", JSON.stringify(user));
	return true;
}

function getUser() {
	const user = localStorage.getItem("auth_auth_user");
	return user;
}

function removeUser() {
	localStorage.removeItem("auth_auth_user");
	return true;
}

function setShop(shop) {
	localStorage.setItem("shop", shop);
	return true;
}

function getShop() {
	const shop = localStorage.getItem("shop");
	return shop;
}

function removeShop() {
	localStorage.removeItem("shop")
}

export {
	setToken,
	getToken,
	removeToken,
	setUser,
	getUser,
	removeUser,
	setShop,
	getShop,
	removeShop
}