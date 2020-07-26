import React, {useEffect, useState} from 'react';
import { Link,useHistory,useLocation } from 'react-router-dom';
import {toaster} from "evergreen-ui";
import {geolocated} from "react-geolocated";
import {Post} from "../../util/transport";
import {
	setToken, setUser,
	getToken, removeUser
} from "../../util/storage";

const Setup = ({coords}) => {
	const location = useLocation()
	const params = location.state.params;
	const userId = params._id;

	const history = useHistory()
	const [description,setDescription] = useState('')
	const [user,setUser] = useState(userId)
	const [loading, setLoading] = useState(false);
	const [name,setName] = useState('')
	const [regNo,setRegNo] = useState('')


	const [cert,setCert] = useState(null)

    const handleSubmit = (e) => {
		e.preventDefault();
		const { latitude, longitude } = coords;
		console.log("long", longitude,"lat",latitude)
		if(latitude || longitude){
		!name ? toaster.warning("Enter Your Business Name") :
			!regNo ? toaster.warning("Enter Registration number") :
				!cert ? toaster.warning("Upload an image of your business certificate") :
					!description ? toaster.warning("Describe your business") :
								console.log(name,regNo,cert,description)
		}
		Post('/shops/',{
			// owner_id:user,
			name,
			location: {
				longitude,
				latitude,
			},
			certificate:cert.name,
			certificate_number:regNo,
			description: description
		})
			.then(({data})=>{
				setLoading(false)
				if(!data.success){
					toaster.warning(data.message);
				}
				else {
					toaster.success(data.message);


					setUser(data.payload.user);
					data.success ? history.push('/login'): toaster.warning("check your network");
				}
			})
			.catch((err)=>{
				setLoading(false)
				toaster.danger(err.message)
			})

	}

	useEffect(() => {
		const token = getToken()
		setToken(token)
		setUser(user)

	},[])

    return(
			<>

				<div className="accountbg"></div>
				<div className="wrapper-page">
					<div className="card">
						<div className="card-body">
							<h3 className="text-center m-0">
								<Link to="/" className="logo logo-admin">
									<img src={require("../../assets/images/logo.png")} height="30" alt="logo" />
								</Link>
							</h3>

							<div className="p-3">


									<h4 className="font-18 m-b-5 text-center">Business Details</h4>
									<>
										<h4 className="font-18 m-b-5 text-center">Thanks For Signing Up</h4>
										<p className="text-muted text-center">
											Kindly complete the set up process to continue to InKognito.
										</p>
									</>
									<form className="form-horizontal m-t-30" onSubmit={(e)=>handleSubmit(e)}>
										<div className="form-group">
											<label for="username">Business Name</label>
											<input
												type="text"
												className="form-control"
												id="username"
												placeholder="Enter name of business"
												onChange={(e) => setName(e.target.value)}
											/>
										</div>
										<div className="form-group">
											<label for="username">Business Registration No.</label>
											<input
												type="text"
												className="form-control"
												id="registration_number"
												placeholder="Enter Registration Number"
												onChange={(e)=> setRegNo(e.target.value)}
											/>
										</div>

										<div className="form-group">
											<label htmlFor="shop_description">Shop description</label>
											<input
												type="text"
												className="form-control"
												id="shop_description"
												placeholder="Describe your shop briefly"
												onChange={(e) => setDescription(e.target.value)}
											/>
										</div>

										<div className="form-group">
											<label for="cert">Business Certificate</label>
											<input
												type="file"
												className="form-control"
												id="Certificate"
												placeholder="provide business certificate"
												onChange={(e)=> setCert(e.target.files[0])}
											/>
										</div>
										<div className="form-group m-t-20">
											<div className="col-sm-6 text-right float-right">
												<button
													className="btn btn-primary w-md waves-effect waves-light"
													type={"submit"}
												>
													Submit
												</button>
											</div>
										</div>
									</form>
							</div>
						</div>
					</div>

					<div className="m-t-40 text-center">
						<p className="text-white">
							© {new Date().getFullYear()}{" "}
							BackSlash Technologies
						</p>
					</div>
				</div>
			</>
    );
}

export default geolocated({
	positionOptions: {
		enableHighAccuracy: false,
	},
	userDecisionTimeout: 5000,
})(Setup);
