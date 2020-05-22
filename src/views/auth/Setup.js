import React, {useEffect, useState} from 'react';
import { Link,useHistory } from 'react-router-dom';
import {toaster} from "evergreen-ui";
import { Post } from "../../util/transport";

const Setup = () => {
    const {push} = useHistory()
    const [page, setPage] = useState(0);
    const [loading, setLoading] = useState(false);
	const [business_name, setBusinessName] = useState("");
	const [business_number, setBusinessNumber] = useState("");
	const [business_certificate, setBusinessCertificate] = useState("");
	const [owner_number, setOwnerNumber] = useState("");
	const [owner_certificate, setOwnerCertificate] = useState("");
	const [owner_type, setOwnerType] = useState("");

	const handleNext = () => {
        setPage(page === 3 ? 3 : page+1)
    }
    const handlePrev = () => {
        setPage(page === 0 ? 0 : page-1)
    }
    const handleSubmit = () => {
        if(!(business_name && business_number && business_certificate)) {
            toaster.warning("please fill in details")
            setPage(1)
            return;
        }
        if(!(owner_certificate && owner_number && owner_type)) {
            toaster.warning("please fill in details")
            setPage(2)
            return;
        }
        setLoading(true);
        const data = new FormData();
        data.append('licence_number', business_number);
        data.append('licence_certificate', business_certificate);
        data.append('business_name', business_name);
        data.append('identification_type', owner_type)
        data.append('identification_number', owner_number);
        data.append('identification_certificate', owner_certificate);
        Post("/users/setup", data)
        .then(({data})=>{
            setLoading(false);
            if(data.success){
                push("/")
                toaster.warning("Hurray",{
                    description:data.message
                })
            }else{
                toaster.warning("Error",{
                    description:data.message
                })
            }
        })
        .catch((err)=>{
            console.log(err);
            setLoading(false);
        })
    }



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

                            {page === 0 &&
                            <>
                                <h4 className="font-18 m-b-5 text-center">Thanks For Signing Up</h4>
                                <p className="text-muted text-center">
                                    Kindly complete the set up process to continue to InKognito.
                                </p>

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
                            </>}

							{page === 1 &&
                            <>
                                <h4 className="font-18 m-b-5 text-center">Business Details</h4>
                                <p className="text-muted text-center">
                                    This is to verify if the business is actually registered
                                </p>
                                <div className="form-horizontal m-t-30">
                                    <div className="form-group">
                                        <label for="username">Business Name</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="username"
                                            placeholder="Enter name of business"
                                            onChange={(e)=>setBusinessName(e.target.value)}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label for="username">Business Registration No.</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="username"
                                            placeholder="Enter username"
                                            onChange={(e)=>setBusinessNumber(e.target.value)}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label for="userpassword">Business Certificate</label>
                                        <input
                                            type="file"
                                            className="form-control"
                                            id="userpassword"
                                            placeholder="Enter text"
                                            onChange={(e)=>setBusinessCertificate(e.target.files[0])}
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
                                                onClick={handleNext}
                                            >
                                                Next
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </>}

							{page === 2 &&
                            <>
                                <h4 className="font-18 m-b-5 text-center">Owner Details</h4>
                                <p className="text-muted text-center">
                                </p>
                                <div className="form-horizontal m-t-30">
                                    <div className="form-group">
                                        <label for="userpassword">ID Type</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="userpassword"
                                            placeholder="Enter text"
                                            onChange={(e)=>setOwnerType(e.target.value)}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label for="userpassword">ID Number</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="userpassword"
                                            placeholder="Enter text"
                                            onChange={(e)=>setOwnerNumber(e.target.value)}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label for="userpassword">Image of ID Card</label>
                                        <input
                                            type="file"
                                            className="form-control"
                                            id="userpassword"
                                            placeholder="Enter text"
                                            onChange={(e)=>setOwnerCertificate(e.target.files[0])}
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
                                                onClick={handleNext}
                                            >
                                                Next
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </>}

							{page === 3 &&
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
                                        <label for="userpassword">ID Type</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            value={owner_type}
                                            disabled
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label for="userpassword">ID Number</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            value={owner_number}
                                            disabled
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label for="userpassword">Image of ID Card</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            value={owner_certificate}
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
                                                {loading ? 'Submitting...' : 'Done'}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </>}
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

export default Setup;
