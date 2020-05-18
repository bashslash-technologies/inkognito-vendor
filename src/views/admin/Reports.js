import React from 'react';
import { Link } from 'react-router-dom';
import {TextInputField} from 'evergreen-ui';

const Reports = () => {
    return (
        <div className="container-fluid">

            <div className="row">
                <div className="col-sm-12">
                    <div className="page-title-box">
                        <div className="btn-group pull-right">
                            <ol className="breadcrumb hide-phone p-0 m-0">
                                <li className="breadcrumb-item"><Link to="#">Dashboard</Link></li>
                                <li className="breadcrumb-item active">Reports</li>
                            </ol>
                        </div>
                        <h4 className="page-title">Reports</h4>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-12">
                    <div className="card m-b-20">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-4">
                                    <TextInputField
                                        label="Module"
                                        inputHeight={40}
                                    />
                                </div>
                                <div className="col-4">
                                    <TextInputField
                                        label="From Date"
                                        inputHeight={40}
                                    />
                                </div>
                                <div className="col-4">
                                    <TextInputField
                                        label="To Date"
                                        inputHeight={40}
                                    />
                                </div>
                            </div>
                            <div className="div">
                                <div className="float-right">
                                    <button className="btn btn-primary w-100 float-right">Generate Report</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
    );
}

export default Reports;   