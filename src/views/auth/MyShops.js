import React , {useState, useEffect} from 'react';
import { Link,useHistory } from 'react-router-dom';
import { toaster } from "evergreen-ui";
import { Get } from "../../util/transport";
import { times } from "lodash";
import { setShop } from '../../util/storage';

const MyShops = () => {

	const [shop_id, setShopID] = useState(0);
	const [shops, setShops] = useState([]);
	const [loading, setLoading] = useState(true);
	const {push} = useHistory()

	const handleSubmit = () => {
		if(!shop_id) {
			toaster.warning("kindly selecect a shop")
		}
		else{
			setShop(shop_id)
		}
	}

	useEffect(() => {
		Get("/shops/me")
			.then(({data}) => {
				setLoading(false)
				if(!data.success){
					toaster.warning(data.message);
				}
				else {
					console.log(data.payload.user)
					setShops(data.payload.shops)
				}
			})
			.catch((err) => {
				setLoading(false)
				toaster.danger(err.message)
			})
	}, [])

    return(
		<>
			{/*<div className="accountbg"></div>*/}
			<div className="wrapper-page">
				<div className="card">
					<div className="card-body">

						<h3 className="text-center m-0">
							<Link to="/" className="logo logo-admin">
								<img src={require("../../assets/images/logo.png")} height="30" alt="logo" />
							</Link>
						</h3>

						<div className="p-3">
						{shops.length > 0 ? 
							<>
								<h4 className="font-18 m-b-5">Welcome Declan,</h4>
								<p className="text-muted">Select A shop to Continue</p>
							</>
						:
							<>
								<h4 className="font-18 m-b-5">Welcome Declan,</h4>
								<p className="text-muted text-center">
									Thanks For Signing Up<br/>
									Create your very first Shop to continue to InKognito.
								</p>
							</>
						}
							<div className="form-horizontal m-t-30">
								{shops.length > 0 ?
									<>
									 	<div className="row">
											{times(3, (index)=>
												<div className="col-12 my-1">
													<div className={`card ${shop_id === index ?"border-primary border-3": ""}`} onClick={()=>setShopID(index)}>
														<div className="row m-0 p-0 align-items-center">
															<img
														  		src="https://upload.wikimedia.org/wikipedia/commons/a/a1/Alan_Turing_Aged_16.jpg"
															 	alt="Alan Turing"
															  	className="m-2 p-0"
															  	width="45px"
															  	height="45px"
															  	style={{objectFit: "cover", borderRadius: "30px"}}
															/>
															<h6 className="col text-truncate">Attia Donko Saloon sdkjskjf ksjfksjfkj ksjfkjskjf kjsjfjksfj ksffkjskf ksjfkjskjf</h6>
														</div>
													</div>
												</div>
											)}
										</div>
										<div className="form-group row m-t-20">
											<div className="col-sm-6">
												<Link
													to="setup"
													className="font-500 font-14 font-secondary text-muted"
												>
													Create New Shop
												</Link>
											</div>
											<div className="col-6 text-right">
												<button onClick={handleSubmit} className="btn btn-primary w-md waves-effect waves-light" type="submit">Continue</button>
											</div>
										</div>
									</>
									:
									<div className="align-items-center justify-content-center row p-5">
										<Link
											to="setup"
											className="btn btn-primary w-md waves-effect waves-light"
										>
											Create Your First Shop
										</Link>
									</div>
								}

							</div>
						</div>

					</div>
				</div>

				<div className="m-t-40 text-center">
					<p className="">©  {new Date().getFullYear()} BackSlash Technologies</p>
				</div>

			</div>
		</>
	);
}

export default MyShops;
