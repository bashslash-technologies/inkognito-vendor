import React , {Component } from 'react';
import AUX from '../../../hoc/Aux_';
import { Link } from 'react-router-dom';
import Vector from "../../MapsTypes/VectorMaps/vectormap";

class Maps_vector extends Component{
 
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
                                    <li className="breadcrumb-item"><Link to="#">Admiria</Link></li>
                                    <li className="breadcrumb-item active">Starter</li>
                                </ol>
                            </div>
                            <h4 className="page-title">Starter</h4>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-6">
                        <div className="card m-b-20">
                            <div className="card-body">

                                <h4 className="mt-0 header-title">World Map</h4>
                                <p className="text-muted m-b-30 font-14">Example of vector map.</p>


                                    <div id="world-map-markers" style={{ height : "420px" }}> 
                                          <Vector value="world_mill" width="800" color="#d4dadd" />
                                        </div>

                            </div>
                        </div>
                    </div> 
                    <div className="col-lg-6">
                        <div className="card m-b-20">
                            <div className="card-body">

                                <h4 className="mt-0 header-title">USA Map</h4>
                                <p className="text-muted m-b-30 font-14">Example of vector map.</p>

                                <div id="world-map-markers" style={{ height : "350px" }}> 
                                        <Vector value="us_aea" width="500" color="#56c2d6"/>
                                        </div>

                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-6">
                        <div className="card m-b-20">
                            <div className="card-body">

                                <h4 className="mt-0 header-title">Chicago Map</h4>
                                <p className="text-muted m-b-30 font-14">Example of vector map.</p>

                                <div id="world-map-markers"  style={{ height : "350px" }}> 
                                        <div id="world-map-markers" style={{ height : "350px" }}> 
                                        <Vector value="continents_mill" width="500" color="#f0643b"  />
                                        </div>
                                        </div>

                            </div>
                        </div>
                    </div> 

                    <div className="col-lg-6">
                        <div className="card m-b-20">
                            <div className="card-body">

                                <h4 className="mt-0 header-title">UK Vector Map</h4>
                                <p className="text-muted m-b-30 font-14">Example of vector map.</p>
                               
                                <div id="world-map-markers"  style={{ height : "350px" }}> 
                                        <Vector value="ch_mill" width="500"  color="#f0643b" />
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

export default Maps_vector;   