import React , {useState, useEffect} from 'react';
import { Link,useHistory } from 'react-router-dom';
import { toaster } from "evergreen-ui";
import { Post } from "../../util/transport";
import {
	setToken, setUser,
	removeToken, removeUser
} from "../../util/storage";

const Register = () => {

	const [email, setEmail] = useState('');
	const [name, setName] = useState('');
	const [phone, setPhone] = useState('');
	const [password, setPassword] = useState('');
	const [loading, setLoading] = useState(false);
	const {push} = useHistory()

	const handleSubmit = () => {
		setLoading(true)
		if(!email) {
			setLoading(false)
			toaster.warning("kindly enter an email")
			return
		}
		if(!name) {
			setLoading(false)
			toaster.warning("kindly enter full name")
			return
		}
		if(!phone) {
			setLoading(false)
			toaster.warning("kindly enter phone number")
			return
		}
		if(!password) {
			setLoading(false)
			toaster.warning("kindly choose a password")
			return
		}
		Post('/users/register', {
			email,
			name,
			phone: phone.slice(-9),
			password,
			role: 'VENDOR'
		})
		.then(({data})=>{
			setLoading(false)
			console.log(data)
			if(!data.success){
				toaster.warning(data.message);
			}
			else {
				push('/auth/verify-phone',{
					state:{
						data:data.payload
					}
				});
				toaster.success(data.message);
				// setUser(data.payload.user);
			}
		})
		.catch((err)=>{
			console.log(err)
			setLoading(false)
			toaster.danger(err.message)
		})
	}

	useEffect(()=>{
		removeUser();
		removeToken();
	}, [])

    return(
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
							<h4 className="font-18 m-b-5 text-center">Register</h4>
							<p className="text-muted text-center">Get your free Inkognito account now.</p>

							<div className="form-horizontal m-t-30">

								<div className="form-group">
									<label for="useremail">Email</label>
									<input
										type="email"
										className="form-control"
										id="email"
										placeholder="Enter email"
										onChange={(e)=>setEmail(e.target.value)}
									/>
								</div>

								<div className="form-group">
									<label for="name">Name</label>
									<input
										type="text"
										className="form-control"
										id="name"
										placeholder="Enter full name"
										onChange={(e)=>setName(e.target.value)}
									/>
								</div>

								<div className="form-group">
									<label for="phone">Phone</label>
									<input
										type="phone"
										className="form-control"
										id="phone"
										placeholder="Enter phone number"
										onChange={(e)=>setPhone(e.target.value)}
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

								<div className="form-group row m-t-20">
									<div className="col-12 text-right">
										<button onClick={handleSubmit} disabled={loading} className="btn btn-primary w-md waves-effect waves-light" type="submit">{loading ? "Registering..." : 'Register'}</button>
									</div>
								</div>

								<div className="form-group m-t-10 mb-0 row">
									<div className="col-12 m-t-20">
										<p className="font-14 text-muted mb-0">By registering you agree to the Inkognito <Link to="#">Terms of Use</Link></p>
									</div>
								</div>
							</div>
						</div>

					</div>
				</div>

				<div className="m-t-40 text-center">
					<p className="">Already have an account ? <Link to="login" className="font-500 font-14 font-secondary"> Login </Link> </p>
					<p className="">©  {new Date().getFullYear()} BackSlash Technologies</p>
				</div>

			</div>
		</>
	);
}

export default Register;
