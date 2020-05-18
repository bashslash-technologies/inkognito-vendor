import React , {useState } from 'react';
import { Link } from 'react-router-dom';

const Forgot = () => {
    
	const [email, setEmail] = useState('');
	const [loading, setLoading] = useState(false);

	const handleSubmit = () => {
		setLoading(true)
		alert("submitted")
		setLoading(false)
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
							<h4 className="font-18 m-b-5 text-center">Reset Password</h4>
							<p className="text-muted text-center">Enter your Email and instructions will be sent to you!</p>

							<form className="form-horizontal m-t-30">

								<div className="form-group">
									<label for="useremail">Email</label>
									<input
										type="email"
										className="form-control"
										id="useremail"
										placeholder="Enter email"
										onChange={(e)=>setEmail(e.target.value)}
									/>
								</div>

								<div className="form-group row m-t-20">
									<div className="col-12 text-right">
										<button onClick={handleSubmit} className="btn btn-primary w-md waves-effect waves-light" type="submit">Reset</button>
									</div>
								</div>

							</form>
						</div>

					</div>
				</div>

				<div className="m-t-40 text-center">
					<p className="text-white">Remember It ? <Link to="login" className="font-500 font-14 text-white font-secondary"> Sign In Here </Link> </p>
					<p className="text-white">© {new Date().getFullYear()} BackSlash Technologies</p>
				</div>
			</div>
		</>
	);
}

export default Forgot;