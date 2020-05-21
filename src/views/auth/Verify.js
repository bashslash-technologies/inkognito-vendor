import React , {useState } from 'react';
import { Link } from 'react-router-dom';
import { toaster } from "evergreen-ui";
import { Post, Get } from "../../util/transport";
import {
	setToken, setUser,
	removeToken, removeUser
} from "../../util/storage";

const Verify = () => {
    
	const [code, setCode] = useState('');
	const [loading, setLoading] = useState(false);

	const handleSubmit = () => {
		setLoading(true)
		if(!code) {
			setLoading(false)
			toaster.warning("kindly enter code")
			return
		}
		Post('/users/verify', {
			code,
		})
		.then(({data})=>{
			setLoading(false)
			if(!data.success){
				toaster.warning(data.message);
			}
			else {
				toaster.success(data.message);
				setUser(data.payload.user);
				setToken(data.payload.token);
			}
		})
		.catch((err)=>{
			setLoading(false)
			toaster.danger(err.message)
		})
	}

	const handleResend = () => {
		setLoading(true)
		Get('/users/verify', {

		})
		.then(({data})=>{
			setLoading(false)
			if(!data.success){
				toaster.warning(data.message);
			}
			else {
				toaster.success(data.message);
			}
		})
		.catch((err)=>{
			setLoading(false)
			toaster.danger(err.message)
		})
	}

    return(
		<>
			<div className="accountbg"></div>
			<div className="wrapper-page">

				<div className="card">
					<div className="card-body">

						<h3 className="text-center m-0">
							<Link to="/" onClick={()=> this.props.UpdateLoginAgain()}  className="logo logo-admin">
								<img src={require("../../assets/images/logo.png")} height="30" alt="logo" />	
							</Link>
						</h3>

						<div className="p-3">
							<h4 className="font-18 m-b-5 text-center">Verify Phone Number</h4>
							<p className="text-muted text-center">Enter your 6 digit code sent to your phone number!</p>

							<div className="form-horizontal m-t-30">

								<div className="form-group">
									<label for="usercode">Code</label>
									<input
										type="text"
										className="form-control"
										id="usercode"
										placeholder="Enter code"
										onChange={(e)=>setCode(e.target.value)}
									/>
								</div>

								<div className="form-group row m-t-20">
									<div className="col-12 text-right">
										<button onClick={handleSubmit} className="btn btn-primary w-md waves-effect waves-light" type="submit">Verify</button>
									</div>
								</div>


								<div className="form-group m-t-10 mb-0 row">
									<div className="col-12 m-t-20">
										<p className="font-14 text-muted text-center mb-0">Didn't receive code? <a href="#" onClick={handleResend}>Resend</a></p>
									</div>
								</div>

							</div>
						</div>

					</div>
				</div>

				<div className="m-t-40 text-center">
					<p className="text-white">© {new Date().getFullYear()} BackSlash Technologies</p>
				</div>
			</div>
		</>
	);
}

export default Verify;