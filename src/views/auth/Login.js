import React, {useState, useEffect} from "react";
import { Link,useHistory } from "react-router-dom";
import { toaster } from "evergreen-ui";
import { Post } from "../../util/transport";
import {
	setToken, setUser,
	removeToken, removeUser, removeShop
} from "../../util/storage";

const  Login = () => {
	const {push} = useHistory()
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [loading, setLoading] = useState(false);

	const handleSubmit = () => {
		setLoading(true)
		if(!username) {
			setLoading(false)
			toaster.warning("kindly enter username")
			return
		}
		if(!password) {
			setLoading(false)
			toaster.warning("kindly enter your password")
			return
		}
		Post('/users/login', {
			username,
			password,
			role: "VENDOR"
		})
		.then(({data})=>{
			setLoading(false)
			if(!data.success){
				toaster.warning(data.message);
			}
			else {
				console.log(data.payload.user)
				setUser(data.payload.user);
				setToken(data.payload.token);
				if(data.payload.user.util){
					push('/auth/verify-phone',{
						state:{
							data:data.payload
						}
					})
					toaster.success("Please verify your account");
					return;
				}
				toaster.success(data.message);
				setUser(data.payload.user);
				setToken(data.payload.token);
				push("/")
			}
		})
		.catch((err)=>{
			setLoading(false)
			toaster.danger(err.message)
		})
	}

	useEffect(()=>{
		removeUser();
		removeToken();
		removeShop();
	}, [])

	return (
		<>
			{/*<div className="accountbg"></div>*/}
			<div className="wrapper-page">
				<div className="card">
					<div className="card-body">
						<h3 className="text-center m-0">
							<Link to="/" className="logo logo-admin">
								{/*<img src={require("../../assets/images/logo.png")} height="30" alt="logo" />*/}
							</Link>
						</h3>

						<div className="p-3">
							<h4 className="font-18 m-b-5 text-center">Welcome Back !</h4>
							<p className="text-muted text-center">
								Sign in to continue to InKognito.
							</p>

							<div className="form-horizontal m-t-30">
								<div className="form-group">
									<label for="username">Username</label>
									<input
										type="text"
										className="form-control"
										id="username"
										placeholder="Enter username"
										onChange={(e)=>setUsername(e.target.value)}
									/>
								</div>

								<div className="form-group">
									<label for="userpassword">Password</label>
									<input
										type="password"
										className="form-control"
										id="userpassword"
										placeholder="Enter password"
										onChange={(e)=>setPassword(e.target.value)}
									/>
								</div>

								<div className="form-group row m-t-20 align-items-center">
									<div className="col-sm-6">
										<Link
											to="register"
											className="font-500 font-14 font-secondary text-muted"
										>
											SignUp Now
										</Link>
									</div>
									<div className="col-sm-6 text-right">
										<button
											disabled={loading}
											className="btn btn-primary w-md waves-effect waves-light"
											onClick={handleSubmit}
										>
											{loading ? "Logging in" : 'Login'}
										</button>
									</div>
								</div>

								<div className="form-group mt-4 mb-0 text-center">
									<div className="col-12 mt-4">
										<Link to="forgot-password" className="text-muted">
											<i className="mdi mdi-lock"></i> Forgot your password?
										</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="m-t-40 text-center">
					<p className="">
						© {new Date().getFullYear()}{" "}
						BackSlash Technologies
					</p>
				</div>
			</div>
		</>
	);
}

export default Login;
