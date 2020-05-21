import React, {useState,useEffect} from 'react';
import {Link, useHistory} from 'react-router-dom';
import {toaster} from "evergreen-ui";
import {Post, Get} from "../../util/transport";

const Verify = () => {
    const {push, location} = useHistory();
    const [username,setName] = useState("")
    const [code, setCode] = useState('');
    const [loading, setLoading] = useState(false);
	const [countDown, setCountdown] = useState(59);
	const [resendLoad, setResetLoad] = useState(false);

	useEffect(()=>{
		let token = location.state;
		if(!token) {
			push('/auth/login');
			return toaster.warning("Error",{
				description:"Your token expired, please login to continue"
			})
		}
		setName(location.state.state.data.user.email)
	},[])

	useEffect(() => {
		if (countDown > 0) setTimeout(() => setCountdown(countDown - 1), 1000);
	}, [countDown]);

    const handleSubmit = () => {
        setLoading(true)
        if (!code) {
            setLoading(false);
            toaster.warning("kindly enter code")
            return
        }
        Post('/users/verify', {
            code,
            username
        })
            .then(({data}) => {
                setLoading(false)
                if (!data.success) {
                    toaster.warning(data.message);
                } else {
                    push('/auth/setup', {
                        state: {
                            data: data.payload
                        }
                    });
                    toaster.success(data.message);
                }
            })
            .catch((err) => {
                setLoading(false)
                toaster.danger(err.message)
            })
    }

    const handleResend = () => {
		setResetLoad(true);
		Get(`/users/verify?username=${username}`)
            .then(({data}) => {
				console.log(data)
				setResetLoad(false);
				if (countDown == 0) setCountdown(59);
				if (!data.success) {
                    toaster.warning(data.message);
                } else {
                    toaster.success(data.message);
                }
            })
            .catch((err) => {
				setResetLoad(false);
				setCountdown(0);
                toaster.danger(err.message)
            })
    }

    return (
        <>
            <div className="accountbg"></div>
            <div className="wrapper-page">

                <div className="card">
                    <div className="card-body">

                        <h3 className="text-center m-0">
                            <Link to="/" onClick={() => this.props.UpdateLoginAgain()} className="logo logo-admin">
                                <img src={require("../../assets/images/logo.png")} height="30" alt="logo"/>
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
                                        onChange={(e) => setCode(e.target.value)}
                                    />
                                </div>

                                <div className="form-group row m-t-20">
                                    <div className="col-12 text-right">
                                        <button onClick={handleSubmit} disabled={loading}
                                                className="btn btn-primary w-md waves-effect waves-light"
                                                type="submit">{loading ? 'Verifying...' : 'Verify'}</button>
                                    </div>
                                </div>


                                <div className="form-group m-t-10 mb-0 row">
                                    <div className="col-12 m-t-20">
                                        <p className="font-14 text-muted text-center mb-0">Didn't receive code?
											{
												resendLoad ? "Loading..." : countDown !== 0 ? (` 0:${countDown < 10 ? ("0"+countDown) : countDown}`) : (<a
													href="#" onClick={handleResend}>Resend</a>)
											}

                                        </p>
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
