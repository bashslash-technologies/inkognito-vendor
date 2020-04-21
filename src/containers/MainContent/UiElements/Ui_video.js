import React , {Component } from 'react';
import AUX from '../../../hoc/Aux_';
import { Link } from 'react-router-dom';

class Ui_video extends Component{
 
render(){

    return(
           <AUX>
		   
		  <div className="wrapper">
            <div className="container-fluid">

                <div className="row">
                    <div className="col-sm-12">
                        <div className="page-title-box">
                            <div className="btn-group pull-right">
                                <ol className="breadcrumb hide-phone p-0 m-0">
                                    <li className="breadcrumb-item"><Link to="#">UI Kit</Link></li>
                                    <li className="breadcrumb-item active">Video</li>
                                </ol>
                            </div>
                            <h4 className="page-title">Video</h4>
                        </div>
                    </div>
                </div>


                <div className="row">

                    <div className="col-lg-6">
                        <div className="card m-b-20">
                            <div className="card-body">

                                <h4 className="mt-0 header-title">Responsive embed video 16:9</h4>
                                <p className="text-muted m-b-30 font-14">Aspect ratios can be customized with modifier classNamees.</p>

                                <div className="embed-responsive embed-responsive-16by9">
                                    <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/1y_kfWUCFDQ"></iframe>
                                </div>
                            </div>
                        </div>
                    </div> 

                    <div className="col-lg-6">
                        <div className="card m-b-20">
                            <div className="card-body">

                                <h4 className="mt-0 header-title">Responsive embed video 21:9</h4>
                                <p className="text-muted m-b-30 font-14">Aspect ratios can be customized with modifier classNamees.</p>

                                <div className="embed-responsive embed-responsive-21by9">
                                    <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/1y_kfWUCFDQ"></iframe>
                                </div>

                            </div>
                        </div>
                    </div>
                </div> 

                <div className="row">

                    <div className="col-lg-6">
                        <div className="card m-b-20">
                            <div className="card-body">

                                <h4 className="mt-0 header-title">Responsive embed video 4:3</h4>
                                <p className="text-muted m-b-30 font-14">Aspect ratios can be customized with modifier classNamees.</p>

                                <div className="embed-responsive embed-responsive-4by3">
                                    <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/1y_kfWUCFDQ"></iframe>
                                </div>
                            </div>
                        </div>
                    </div> 

                    <div className="col-lg-6">
                        <div className="card m-b-20">
                            <div className="card-body">

                                <h4 className="mt-0 header-title">Responsive embed video 1:1</h4>
                                <p className="text-muted m-b-30 font-14">Aspect ratios can be customized with modifier classNamees.</p>

                                <div className="embed-responsive embed-responsive-1by1">
                                    <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/1y_kfWUCFDQ"></iframe>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
		   </AUX>
        );
    }
}

export default Ui_video;   
