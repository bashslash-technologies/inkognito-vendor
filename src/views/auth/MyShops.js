import React , {useState, useEffect} from 'react';
import { Link,useHistory } from 'react-router-dom';
import { toaster } from "evergreen-ui";
import { Post } from "../../util/transport";
import { times } from "lodash";

const MyShops = () => {

	const [shop, setShop] = useState(0);
	const [shops, setShops] = useState(0);
	const {push} = useHistory()

	const handleSubmit = () => {
		if(!shop) {
			toaster.warning("kindly selecect a shop")
		}
		else{
			//set the shop id in context
		}
	}

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
							<h4 className="font-18 m-b-5">Welcome Declan,</h4>
							<p className="text-muted">{shops.length > 0 ? "Select A shop to Continue":"Create A Shop to Continue"}</p>

							<div className="form-horizontal m-t-30">
								{shops.length > 0 ?
									<>
									 	<div className="row">
											{times(3, (index)=>
												<div className="col-12 my-1">
													<div className={`card ${shop === index ?"border-primary border-3": ""}`} onClick={()=>setShop(index)}>
														<div className="row m-0 p-0 align-items-center">
															<img
														  		src="https://upload.wikimedia.org/wikipedia/commons/a/a1/Alan_Turing_Aged_16.jpg"
															 	name="Alan Turing"
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
											<div className="col-6">
												<button onClick={handleSubmit} className="btn btn-primary w-md waves-effect waves-light" type="submit">Create Shop</button>
											</div>
											<div className="col-6 text-right">
												<button onClick={handleSubmit} className="btn btn-primary w-md waves-effect waves-light" type="submit">Continue</button>
											</div>
										</div>
									</>
									:
									<div>
										<button onClick={handleSubmit} className="btn btn-primary w-md waves-effect waves-light" type="submit">Create Your First Shop</button>
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
