import React, {useEffect, useState} from 'react';
import {Link,useHistory} from 'react-router-dom';
import {Get,Post} from "../../util/transport";
import {toaster} from "evergreen-ui";

const NewPassword = () => {
    const  {push,location} = useHistory()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirm, setConfirm] = useState('');
    const [loading, setLoading] = useState(false);

    useEffect(()=>{
        let token = location.state;
        if(!token) {
            push('/auth/login');
            return toaster.warning("Error",{
                description:"Your token expired, please login to continue"
            })
        }
        setEmail(location.state.state.data.user._id)
    },[])

    const handleSubmit = async (e) => {
        e.preventDefault();

        if(password.trim() !== confirm.trim())
            return toaster.warning("Error",{
                description:"Passwords do not match"
            });

        setLoading(true);
        Post(`/users/password?user_id=${email}`,{
            password
        }).then(({data}) => {
            setLoading(false);
            if(!data.success){
                toaster.warning(data.message);
            }else{
                push('/auth/login');
                toaster.warning(data.message || "Success");
            }
        }).catch((err) => {
            setLoading(false);
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
                            <h4 className="font-18 m-b-5 text-center">Reset Password</h4>
                            <p className="text-muted text-center">Enter your Email and instructions will be sent to
                                you!</p>

                            <form className="form-horizontal m-t-30" onSubmit={handleSubmit}>

                                <div className="form-group">
                                    <label>Confirm</label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        value={password}
                                        required={true}
                                        placeholder="Enter new password"
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Confirm Password</label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        value={confirm}
                                        required={true}
                                        placeholder="Confirm your password"
                                        onChange={(e) => setConfirm(e.target.value)}
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
                    <p className="text-white">Remember It ? <Link to="login"
                                                                  className="font-500 font-14 text-white font-secondary"> Sign
                        In Here </Link></p>
                    <p className="text-white">© {new Date().getFullYear()} BackSlash Technologies</p>
                </div>
            </div>
        </>
    );
}

export default NewPassword;