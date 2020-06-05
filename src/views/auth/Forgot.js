import React, {useState} from 'react';
import {Link,useHistory} from 'react-router-dom';
import {Get} from "../../util/transport";
import {toaster} from "evergreen-ui";

const Forgot = () => {
	const  {push} = useHistory()
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true)
        Get(`/users/reset?username=${email}`).then(({data}) => {
            setLoading(false)
			if(!data.success){
				toaster.warning(data.message);
			}else{
				console.log(data)
				push('/auth/verify-forgot-password',{
					state:{
						data:data.payload
					}
				})
			}
        }).catch((err) => {
			setLoading(false)
			toaster.danger(err.message)
        })
    }
    return (
        <>
            <div className="wrapper-page">

                <div className="card">
                    <div className="card-body">

                        <h3 className="text-center m-0">
                            <Link to="/" onClick={() => this.props.UpdateLoginAgain()} className="logo logo-admin">
                            </Link>
                        </h3>

                        <div className="p-3">
                            <h4 className="font-18 m-b-5 text-center">Forgot Password?</h4>
                            <p className="text-muted text-center">Enter your Email and instructions will be sent to
                                you!</p>

                            <form className="form-horizontal m-t-30" onSubmit={handleSubmit}>

                                <div className="form-group">
                                    <label for="useremail">Email</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="useremail"
                                        value={email}
                                        required={true}
                                        placeholder="Enter email"
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>

                                <div className="form-group row m-t-20">
                                    <div className="col-12 text-right">
                                        <button disabled={loading}
                                                className="btn btn-primary w-md waves-effect waves-light"
                                                type="submit">{loading ? 'Sending..' : 'Reset'}</button>
                                    </div>
                                </div>

                            </form>
                        </div>

                    </div>
                </div>

                <div className="m-t-40 text-center">
                    <p className="">Remembered It ? <Link to="login"
                                                                  className="font-500 font-14 font-secondary"> Sign
                        In Here </Link></p>
                    <p className="">© {new Date().getFullYear()} BackSlash Technologies</p>
                </div>
            </div>
        </>
    );
}

export default Forgot;
