import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { toaster, Spinner } from "evergreen-ui";
import { Post } from "../../util/transport";
import { removeToken, removeUser } from "../../util/storage";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";

const Setup = () => {
	const { push } = useHistory();
	const [page, setPage] = useState(0);
	const [loading, setLoading] = useState(false);
	const [business_name, setBusinessName] = useState("");
	const [business_number, setBusinessNumber] = useState("");
	const [business_certificate, setBusinessCertificate] = useState("");
	const [city, setCity] = useState("");
	const [lngLat, setLngLat] = useState(null);
	const [cityError, setCityError] = useState(false);
	const [useMyLocationPermission, setUseMyLocationPermission] = useState(false);

	const handleNext = () => {
		setPage(page === 3 ? 3 : page + 1);
	};
	const handlePrev = () => {
		setPage(page === 0 ? 0 : page - 1);
	};
	const handleSubmit = () => {
		if (!(business_name && business_number && business_certificate)) {
			toaster.warning("please fill in details");
			setPage(0);
			return;
		}
		/*
		if (!(lngLat)) {
			toaster.warning("please select your shops location");
			setPage(1);
			return;
		}
		*/
		let lingLat = {
			longitude: 234,
			latitude: 43
		}
		setLoading(true);
		const data = new FormData();
		data.append("certificate_number", business_number);
		data.append("certificate", business_certificate, business_certificate.name);
		data.append("name", business_name);
		data.append("location", lingLat);
		Post("/shops", data)
		.then(({ data }) => {
			setLoading(false);
			if (data.success) {
				//don't do this
				removeUser();
				removeToken();
				push("/auth/login");
				toaster.warning("Hurray", {
					description: "Your account is under review now",
				});
			} else {
				toaster.warning("Error", {
					description: data.message,
				});
			}
		})
		.catch((err) => {
			console.log(err);
			setLoading(false);
		});
	};

	const handleChange = (address) => {
		setCity(address);
	};

	const handleSelect = (address) => {
		geocodeByAddress(address)
			.then((results) => {
				setCity(results[0].formatted_address);
				return getLatLng(results[0]);
			})
			.then((latLng) => setLngLat(latLng))
			.catch((error) => console.error("Error", error));
	};

	return (
		<>
			<div className="wrapper-page">
				<div className="card">
					<div className="card-body">
						<h3 className="text-center m-0">
							<Link to="/" className="logo logo-admin">
								<img
									src={require("../../assets/images/logo.png")}
									height="30"
									alt="logo"
								/>
							</Link>
						</h3>

						<div className="p-3">

							{page === 0 && (
								<>
									<h4 className="font-18 m-b-5 text-center">
										Shop Details
									</h4>
									<p className="text-muted text-center">
										This is to verify if the shop is actually registered
									</p>
									<div className="form-horizontal m-t-30">
										<div className="form-group">
											<label for="username">Shop Name</label>
											<input
												type="text"
												className="form-control"
												id="username"
												placeholder="Enter name of business"
												onChange={(e) => setBusinessName(e.target.value)}
											/>
										</div>
										<div className="form-group">
											<label for="username">Business Registration No.</label>
											<input
												type="text"
												className="form-control"
												id="username"
												placeholder="Enter username"
												onChange={(e) => setBusinessNumber(e.target.value)}
											/>
										</div>
										<div className="form-group">
											<label for="userpassword">Business Certificate</label>
											<input
												type="file"
												className="form-control"
												id="userpassword"
												placeholder="Enter text"
												onChange={(e) =>
												setBusinessCertificate(e.target.files[0])
												}
											/>
										</div>

										<div className="form-group row m-t-20">
											<div className="col-sm-6">
											</div>
											<div className="col-sm-6 text-right">
												<button
													className="btn btn-primary w-md waves-effect waves-light"
													onClick={handleNext}
												>
													Next
												</button>
											</div>
										</div>
									</div>
								</>
							)}

							{page === 1 && (
								<>
									<h4 className="font-18 m-b-5 text-center">Shop Details</h4>
									<p className="text-muted text-center"></p>
									<div className="form-horizontal m-t-30">
										<div className="form-group">
											<label
												htmlFor="street_address"
												className="block text-sm font-medium leading-5 text-gray-700"
											>
												Address
											</label>
											<PlacesAutocomplete
												value={city}
												onChange={handleChange}
												onSelect={handleSelect}
											>
												{({
													getInputProps,
													suggestions,
													getSuggestionItemProps,
													loading,
												}) => (
													<div>
														<input
															{...getInputProps({
																placeholder: "Enter location",
																className: `form-control`,
																disabled: useMyLocationPermission,
															})}
														/>
													<div className="autocomplete-dropdown-container shadow">
													{loading && (
														<div
															className={
																"w-full d-flex justify-content-center align-items-center pt-3 pb-3"
															}
														>
															<Spinner size={20} />
														</div>
													)}
													{suggestions.map((suggestion) => {
														const className = suggestion.active
														? "suggestion-item--active  p-2"
														: "suggestion-item p-2";
														// inline style for demonstration purpose
														const style = suggestion.active
														? {
															backgroundColor: "#fafafa",
															cursor: "pointer",
															}
														: {
															backgroundColor: "#ffffff",
															cursor: "pointer",
															};
														return (
														<div
															{...getSuggestionItemProps(suggestion, {
																className,
																style,
															})}
														>
															<span>{suggestion.description}</span>
														</div>
														);
													})}
													</div>
												</div>
												)}
											</PlacesAutocomplete>
											{cityError && (
												<small className={"text-red-500"}>
													Please choose a valid location
												</small>
											)}
										</div>
										<div class="form-group form-check">
											<input
												type="checkbox"
												onChange={(e) => {
												if (useMyLocationPermission === false) {
													navigator.geolocation.getCurrentPosition(function(
													position
													) {
													setLngLat({
														longitude: position.coords.latitude,
														latitude: position.coords.longitude,
													});
													});
												}
												setUseMyLocationPermission(!useMyLocationPermission);
												}}
												checked={useMyLocationPermission}
												class="form-check-input"
												id="location"
											/>
											<label class="form-check-label" for="location">
												Use my current location
											</label>
										</div>
										<div className="form-group row m-t-20">
											<div className="col-sm-6">
												<button
													className="btn btn-primary w-md waves-effect waves-light"
													onClick={handlePrev}
												>
													Previous
												</button>
											</div>
											<div className="col-sm-6 text-right">
												<button
													className="btn btn-primary w-md waves-effect waves-light"
													onClick={handleNext}
												>
													Next
												</button>
											</div>
										</div>
									</div>
								</>
							)}

							{page === 2 && (
								<>
									<h4 className="font-18 m-b-5 text-center">Preview</h4>
									<p className="text-muted text-center">
										Kindly review to see if details are correct.
									</p>
									<div className="form-horizontal m-t-30">
										<div className="form-group">
											<label for="username">Business Name</label>
											<input
												type="text"
												className="form-control"
												value={business_name}
												disabled
											/>
										</div>
										<div className="form-group">
											<label for="username">Business Registration No.</label>
											<input
												type="text"
												className="form-control"
												value={business_number}
												disabled
											/>
										</div>
										<div className="form-group">
											<label for="userpassword">Business Certificate</label>
											<input
												type="text"
												className="form-control"
												value={business_certificate}
												disabled
											/>
										</div>
										<div className="form-group">
											<label for="userpassword">Business Location</label>
											<input
												type="text"
												className="form-control"
												value={lngLat}
												disabled
											/>
										</div>

										<div className="form-group row m-t-20">
											<div className="col-sm-6">
												<button
													className="btn btn-primary w-md waves-effect waves-light"
													onClick={handlePrev}
												>
													Previous
												</button>
											</div>
											<div className="col-sm-6 text-right">
												<button
													className="btn btn-primary w-md waves-effect waves-light"
													type="submit"
													onClick={handleSubmit}
												>
													{loading ? "Submitting..." : "Done"}
												</button>
											</div>
										</div>
									</div>
								</>
							)}
						</div>
					</div>
				</div>

				<div className="m-t-40 text-center">
					<p className="">
						© {new Date().getFullYear()} BackSlash Technologies
					</p>
				</div>
			</div>
		</>
	);
};

export default Setup;
