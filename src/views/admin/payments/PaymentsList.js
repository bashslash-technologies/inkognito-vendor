import React from 'react';
import { Link } from 'react-router-dom';
import {times} from 'lodash';

const PaymentsList = () => {
    return (
        <div className="container-fluid">

            <div className="row">
                <div className="col-sm-12">
                    <div className="page-title-box">
                        <div className="btn-group pull-right">
                            <ol className="breadcrumb hide-phone p-0 m-0">
                                <li className="breadcrumb-item"><Link to="#">Dashboard</Link></li>
                                <li className="breadcrumb-item active">Payments</li>
                            </ol>
                        </div>
                        <h4 className="page-title">Payments</h4>
                    </div>
                </div>
            </div>



            <div className="row">
                <div className="col-12">
                    <div className="card m-b-20">
                        <div className="card-body">
                            <table id="datatable" className="table table-striped dt-responsive nowrap table-vertical" width="100%" cellspacing="0">
                                <thead>
                                    <tr>
                                        <th>Tansaction ID</th>
                                        <th>Order ID</th>
                                        <th>Amount</th>
                                        <th>Tansaction Date</th>
                                        <th>Status</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {times(10, () => (<tr>
                                        <td>
                                            <a href="#" className="font-600 text-muted">#98541201</a>
                                        </td>
                                        <td>
                                            <a href="#" className="font-600 text-muted">#98541201</a>
                                        </td>
                                        <td>$45</td>
                                        <td>Jul 20, 2017</td>
                                        <td><span className="badge badge-success">Paid</span></td>
                                        <td>
                                            <a href="javascript:void(0);" className="m-r-15 text-muted" data-toggle="tooltip" data-placement="top" title="" data-original-title="Edit"><i className="mdi mdi-pencil font-18"></i></a>
                                            <a href="javascript:void(0);" className="text-muted" data-toggle="tooltip" data-placement="top" title="" data-original-title="Delete"><i className="mdi mdi-close font-18"></i></a>
                                        </td>
                                    </tr>))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
    );
}

export default PaymentsList;   