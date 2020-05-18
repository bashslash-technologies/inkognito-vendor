import React , {Component } from 'react';
import AUX from '../../hoc/Aux_';
import {PieChart} from 'react-easy-chart';

class dashboard1 extends Component{

    constructor(props) {
        super(props);
     
        this.state = {
          simple:80, simple68:68, simple37:37, simple72:72,
        };
      }

 
render(){
    return(
        <div className="container-fluid">

            <div className="row">
                <div className="col-sm-12">
                    <div className="page-title-box">
                        <div className="btn-group pull-right">
                            <ol className="breadcrumb hide-phone p-0 m-0">
                                <li className="breadcrumb-item active">Dashboard</li>
                            </ol>
                        </div>
                        <h4 className="page-title">Dashboard</h4>
                    </div>
                </div>
            </div>


                <div className="row">
                    <div className="col-md-6 col-xl-3">
                        <div className="mini-stat clearfix bg-white">
                            <span className="mini-stat-icon bg-purple mr-0 float-right"><i className="mdi mdi-basket"></i></span>
                            <div className="mini-stat-info">
                                <span className="counter text-purple">25140</span>
                                Total Sales
                            </div>
                            <div className="clearfix"></div>
                            <p className=" mb-0 m-t-20 text-muted">Total income: $22506 <span className="pull-right"><i className="fa fa-caret-up m-r-5"></i>10.25%</span></p>
                        </div>
                    </div>
                    <div className="col-md-6 col-xl-3">
                        <div className="mini-stat clearfix bg-white">
                            <span className="mini-stat-icon bg-blue-grey mr-0 float-right"><i className="mdi mdi-black-mesa"></i></span>
                            <div className="mini-stat-info">
                                <span className="counter text-blue-grey">65241</span>
                                New Orders
                            </div>
                            <div className="clearfix"></div>
                            <p className="text-muted mb-0 m-t-20">Total income: $22506 <span className="pull-right"><i className="fa fa-caret-up m-r-5"></i>10.25%</span></p>
                        </div>
                    </div>
                    <div className="col-md-6 col-xl-3">
                        <div className="mini-stat clearfix bg-white">
                            <span className="mini-stat-icon bg-brown mr-0 float-right"><i className="mdi mdi-buffer"></i></span>
                            <div className="mini-stat-info">
                                <span className="counter text-brown">85412</span>
                                Products
                            </div>
                            <div className="clearfix"></div>
                            <p className="text-muted mb-0 m-t-20">Total income: $22506 <span className="pull-right"><i className="fa fa-caret-up m-r-5"></i>10.25%</span></p>
                        </div>
                    </div>
                    <div className="col-md-6 col-xl-3">
                        <div className="mini-stat clearfix bg-white">
                            <span className="mini-stat-icon bg-teal mr-0 float-right"><i className="mdi mdi-coffee"></i></span>
                            <div className="mini-stat-info">
                                <span className="counter text-teal">20544</span>
                                Payments
                            </div>
                            <div className="clearfix"></div>
                            <p className="text-muted mb-0 m-t-20">Total income: $22506 <span className="pull-right"><i className="fa fa-caret-up m-r-5"></i>10.25%</span></p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-3">
                        <div className="card m-b-20">
                            <div className="card-body">
                                <h4 className="mt-0 header-title m-b-30">Recent Stock</h4>

                                <div className="text-center">
                                     
                                    <PieChart
                                        label
                                        size={100}
                                        innerHoleSize={80}
                                        data={[
                                        { key: 'A', value: 80, color: '#ffbb44' },
                                        { key: 'B', value: 20, color: '#fff' },
                                        ]}
                                    />

                                    <div className="clearfix"></div>
                                    <a href="/#" className="btn btn-sm btn-warning m-t-20">View All Data</a>
                                    <ul className="list-inline row m-t-30 clearfix">
                                        <li className="col-6">
                                            <p className="m-b-5 font-18 font-600">7,541</p>
                                            <p className="mb-0">Mobile Phones</p>
                                        </li>
                                        <li className="col-6">
                                            <p className="m-b-5 font-18 font-600">125</p>
                                            <p className="mb-0">Desktops</p>
                                        </li>
                                    </ul>

                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-3">
                        <div className="card m-b-20">
                            <div className="card-body">
                                <h4 className="mt-0 header-title m-b-30">Purchase Order</h4>

                                <div className="text-center">
                          
                                       <PieChart
                                        label
                                        size={100}
                                        innerHoleSize={80}
                                        data={[
                                        { key: 'A', value: 68, color: '#4ac18e' },
                                        { key: 'B', value: 25, color: '#fff' },
                                        ]}
                                    />

                                    <div className="clearfix"></div>
                                    <a href="/#" className="btn btn-sm btn-success m-t-20">View All Data</a>
                                    <ul className="list-inline row m-t-30 clearfix">
                                        <li className="col-6">
                                            <p className="m-b-5 font-18 font-600">2,541</p>
                                            <p className="mb-0">Mobile Phones</p>
                                        </li>
                                        <li className="col-6">
                                            <p className="m-b-5 font-18 font-600">874</p>
                                            <p className="mb-0">Desktops</p>
                                        </li>
                                    </ul>

                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-3">
                        <div className="card m-b-20">
                            <div className="card-body">
                                <h4 className="mt-0 header-title m-b-30">Shipped Orders</h4>

                                <div className="text-center">
                          
                                        
                                       <PieChart
                                        label
                                        size={100}
                                        innerHoleSize={80}
                                        data={[
                                        { key: 'A', value: 69, color: '#8d6e63' },
                                        { key: 'B', value: 30, color: '#fff' },
                                        ]}
                                    />

                                    <div className="clearfix"></div>
                                    <a href="/#" className="btn btn-sm btn-brown m-t-20">View All Data</a>
                                    <ul className="list-inline row m-t-30 clearfix">
                                        <li className="col-6">
                                            <p className="m-b-5 font-18 font-600">1,154</p>
                                            <p className="mb-0">Mobile Phones</p>
                                        </li>
                                        <li className="col-6">
                                            <p className="m-b-5 font-18 font-600">89</p>
                                            <p className="mb-0">Desktops</p>
                                        </li>
                                    </ul>

                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-3">
                        <div className="card m-b-20">
                            <div className="card-body">
                                <h4 className="mt-0 header-title m-b-30">Cancelled Orders</h4>

                                <div className="text-center">
                         
                                        
                                       <PieChart
                                        label
                                        size={100}
                                        innerHoleSize={80}
                                        data={[
                                        { key: 'A', value: 95, color: '#90a4ae' },
                                        { key: 'B', value: 5, color: '#fff' },
                                        ]}
                                    />

                                    <div className="clearfix"></div>
                                    <a href="/#" className="btn btn-sm btn-blue-grey m-t-20">View All Data</a>
                                    <ul className="list-inline row m-t-30 clearfix">
                                        <li className="col-6">
                                            <p className="m-b-5 font-18 font-600">95</p>
                                            <p className="mb-0">Mobile Phones</p>
                                        </li>
                                        <li className="col-6">
                                            <p className="m-b-5 font-18 font-600">25</p>
                                            <p className="mb-0">Desktops</p>
                                        </li>
                                    </ul>

                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="row">
                    <div className="col-xl-6">
                        <div className="card m-b-20">
                            <div className="card-body">
                                <h4 className="mt-0 m-b-30 header-title">Latest Transactions</h4>

                                <div className="table-responsive">
                                    <table className="table table-vertical mb-0">

                                        <tbody>
                                        <tr>
                                            <td>
                                                <img src="assets/images/users/avatar-2.jpg" alt="user-avatar" className="thumb-sm rounded-circle mr-2"/>
                                                Herbert C. Patton
                                            </td>
                                            <td><i className="mdi mdi-checkbox-blank-circle text-success"></i> Confirm</td>
                                            <td>
                                                $14,584
                                                <p className="m-0 text-muted font-14">Amount</p>
                                            </td>
                                            <td>
                                                5/12/2016
                                                <p className="m-0 text-muted font-14">Date</p>
                                            </td>
                                            <td>
                                                <button type="button" className="btn btn-secondary btn-sm waves-effect">Edit</button>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td>
                                                <img src="assets/images/users/avatar-3.jpg" alt="user-avatar" className="thumb-sm rounded-circle mr-2"/>
                                                Mathias N. Klausen
                                            </td>
                                            <td><i className="mdi mdi-checkbox-blank-circle text-warning"></i> Waiting payment</td>
                                            <td>
                                                $8,541
                                                <p className="m-0 text-muted font-14">Amount</p>
                                            </td>
                                            <td>
                                                10/11/2016
                                                <p className="m-0 text-muted font-14">Date</p>
                                            </td>
                                            <td>
                                                <button type="button" className="btn btn-secondary btn-sm waves-effect">Edit</button>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td>
                                                <img src="assets/images/users/avatar-4.jpg" alt="user-avatar" className="thumb-sm rounded-circle mr-2"/>
                                                Nikolaj S. Henriksen
                                            </td>
                                            <td><i className="mdi mdi-checkbox-blank-circle text-success"></i> Confirm</td>
                                            <td>
                                                $954
                                                <p className="m-0 text-muted font-14">Amount</p>
                                            </td>
                                            <td>
                                                8/11/2016
                                                <p className="m-0 text-muted font-14">Date</p>
                                            </td>
                                            <td>
                                                <button type="button" className="btn btn-secondary btn-sm waves-effect">Edit</button>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td>
                                                <img src="assets/images/users/avatar-5.jpg" alt="user-avatar" className="thumb-sm rounded-circle mr-2"/>
                                                Lasse C. Overgaard
                                            </td>
                                            <td><i className="mdi mdi-checkbox-blank-circle text-danger"></i> Payment expired</td>
                                            <td>
                                                $44,584
                                                <p className="m-0 text-muted font-14">Amount</p>
                                            </td>
                                            <td>
                                                7/11/2016
                                                <p className="m-0 text-muted font-14">Date</p>
                                            </td>
                                            <td>
                                                <button type="button" className="btn btn-secondary btn-sm waves-effect">Edit</button>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td>
                                                <img src="assets/images/users/avatar-6.jpg" alt="user-avatar" className="thumb-sm rounded-circle mr-2"/>
                                                Kasper S. Jessen
                                            </td>
                                            <td><i className="mdi mdi-checkbox-blank-circle text-success"></i> Confirm</td>
                                            <td>
                                                $8,844
                                                <p className="m-0 text-muted font-14">Amount</p>
                                            </td>
                                            <td>
                                                1/11/2016
                                                <p className="m-0 text-muted font-14">Date</p>
                                            </td>
                                            <td>
                                                <button type="button" className="btn btn-secondary btn-sm waves-effect">Edit</button>
                                            </td>
                                        </tr>

                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-6">
                        <div className="card m-b-20">
                            <div className="card-body">
                                <h4 className="mt-0 m-b-30 header-title">Latest Orders</h4>

                                <div className="table-responsive">
                                    <table className="table table-vertical mb-0">

                                        <tbody>
                                        <tr>
                                            <td>#12354781</td>
                                            <td>
                                                <img src="assets/images/products/1.jpg" alt="user-avatar" style={{height : "46px"}} className="rounded mr-2" />
                                                Riverston Glass Chair
                                            </td>
                                            <td><span className="badge badge-pill badge-success">Delivered</span></td>
                                            <td>
                                                $185
                                            </td>
                                            <td>
                                                5/12/2016
                                            </td>
                                            <td>
                                                <button type="button" className="btn btn-secondary btn-sm waves-effect">Edit</button>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td>#52140300</td>
                                            <td>
                                                <img src="assets/images/products/2.jpg" alt="user-avatar" style={{height : "46px"}} className="rounded mr-2" />
                                                Shine Company Catalina
                                            </td>
                                            <td><span className="badge badge-pill badge-success">Delivered</span></td>
                                            <td>
                                                $1,024
                                            </td>
                                            <td>
                                                5/12/2016
                                            </td>
                                            <td>
                                                <button type="button" className="btn btn-secondary btn-sm waves-effect">Edit</button>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td>#96254137</td>
                                            <td>
                                                <img src="assets/images/products/3.jpg" alt="user-avatar" style={{height : "46px"}} className="rounded mr-2" />
                                                Trex Outdoor Furniture Cape
                                            </td>
                                            <td><span className="badge badge-pill badge-danger">Cancel</span></td>
                                            <td>
                                                $657
                                            </td>
                                            <td>
                                                5/12/2016
                                            </td>
                                            <td>
                                                <button type="button" className="btn btn-secondary btn-sm waves-effect">Edit</button>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td>#12365474</td>
                                            <td>
                                                <img src="assets/images/products/4.jpg" alt="user-avatar" style={{height : "46px"}} className="rounded mr-2" />
                                                Oasis Bathroom Teak Corner
                                            </td>
                                            <td><span className="badge badge-pill badge-warning">Shipped</span></td>
                                            <td>
                                                $8451
                                            </td>
                                            <td>
                                                5/12/2016
                                            </td>
                                            <td>
                                                <button type="button" className="btn btn-secondary btn-sm waves-effect">Edit</button>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td>#85214796</td>
                                            <td>
                                                <img src="assets/images/products/5.jpg" alt="user-avatar" style={{height : "46px"}} className="rounded mr-2" />
                                                BeoPlay Speaker
                                            </td>
                                            <td><span className="badge badge-pill badge-success">Delivered</span></td>
                                            <td>
                                                $584
                                            </td>
                                            <td>
                                                5/12/2016
                                            </td>
                                            <td>
                                                <button type="button" className="btn btn-secondary btn-sm waves-effect">Edit</button>
                                            </td>
                                        </tr>

                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default dashboard1;   