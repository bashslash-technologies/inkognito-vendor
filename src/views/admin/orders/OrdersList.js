import React from 'react';
import { Link } from 'react-router-dom';
import {times} from 'lodash'

const ProductsList = () => {
    return (
        <div className="container-fluid">

            <div className="row">
                <div className="col-sm-12">
                    <div className="page-title-box">
                        <div className="btn-group pull-right">
                            <ol className="breadcrumb hide-phone p-0 m-0">
                                <li className="breadcrumb-item"><Link to="#">Dashboard</Link></li>
                                <li className="breadcrumb-item active">Orders</li>
                            </ol>
                        </div>
                        <h4 className="page-title">Orders</h4>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-md-6 col-lg-6 col-xl-4">
                    <div className="mini-stat clearfix bg-white">
                        <span className="font-40 text-primary mr-0 float-right"><i className="mdi mdi-cart-outline"></i></span>
                        <div className="mini-stat-info">
                            <h3 className="counter font-light mt-0">$36,410</h3>
                        </div>
                        <div className="clearfix"></div>
                        <p className=" mb-0 m-t-10 text-muted">Completed Orders<span className="pull-right"><i className="fa fa-caret-down text-danger m-r-5"></i>3.25%</span></p>
                    </div>
                </div>
                <div className="col-md-6 col-lg-6 col-xl-4">
                    <div className="mini-stat clearfix bg-white">
                        <span className="font-40 text-success mr-0 float-right"><i className="mdi mdi-currency-usd"></i></span>
                        <div className="mini-stat-info">
                            <h3 className="counter font-light mt-0">$29,854</h3>
                        </div>
                        <div className="clearfix"></div>
                        <p className=" mb-0 m-t-10 text-muted">Active Orders<span className="pull-right"><i className="fa fa-caret-up text-success m-r-5"></i>8.51%</span></p>
                    </div>
                </div>
                <div className="col-md-6 col-lg-6 col-xl-4">
                    <div className="mini-stat clearfix bg-white">
                        <span className="font-40 text-warning mr-0 float-right"><i className="mdi mdi-fingerprint"></i></span>
                        <div className="mini-stat-info">
                            <h3 className="counter font-light mt-0">$4,512</h3>
                        </div>
                        <div className="clearfix"></div>
                        <p className=" mb-0 m-t-10 text-muted">Available Orders<span className="pull-right"><i className="fa fa-caret-down text-danger m-r-5"></i>5.52%</span></p>
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
                                        <th>Order ID</th>
                                        <th>Amount</th>
                                        <th>Order Date</th>
                                        <th>Status</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {times(10, () => (<tr>
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

export default ProductsList;   