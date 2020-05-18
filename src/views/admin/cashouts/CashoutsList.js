import React from 'react';
import { Link } from 'react-router-dom';

const CashoutsList = () => {
    return (
        <div className="container-fluid">

            <div className="row">
                <div className="col-sm-12">
                    <div className="page-title-box">
                        <div className="btn-group pull-right">
                            <ol className="breadcrumb hide-phone p-0 m-0">
                                <li className="breadcrumb-item"><Link to="#">Dashboard</Link></li>
                                <li className="breadcrumb-item active">Cashouts</li>
                            </ol>
                        </div>
                        <h4 className="page-title">Cashouts</h4>
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
                                    <th>Amount</th>
                                    <th>Tansaction Date</th>
                                    <th>Payment</th>
                                    <th>Billing Name</th>
                                    <th>Status</th>
                                    <th>Action</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>
                                        <a href="#" className="font-600 text-muted">#98541201</a>
                                    </td>
                                    <td>$45</td>
                                    <td>Jul 20, 2017</td>
                                    <td><i className="fa fa-cc-visa text-muted font-20"></i> </td>
                                    <td>Herbert C. Patton</td>
                                    <td><span className="badge badge-success">Paid</span></td>
                                    <td>
                                        <a href="javascript:void(0);" className="m-r-15 text-muted" data-toggle="tooltip" data-placement="top" title="" data-original-title="Edit"><i className="mdi mdi-pencil font-18"></i></a>
                                        <a href="javascript:void(0);" className="text-muted" data-toggle="tooltip" data-placement="top" title="" data-original-title="Delete"><i className="mdi mdi-close font-18"></i></a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <a href="#" className="font-600 text-muted">#85124562</a>
                                    </td>
                                    <td>$521</td>
                                    <td>Jul 18, 2017</td>
                                    <td><i className="fa fa-cc-mastercard text-muted font-20"></i> </td>
                                    <td>Mathias N. Klausen</td>
                                    <td><span className="badge badge-warning">Refund</span></td>
                                    <td>
                                        <a href="javascript:void(0);" className="m-r-15 text-muted" data-toggle="tooltip" data-placement="top" title="" data-original-title="Edit"><i className="mdi mdi-pencil font-18"></i></a>
                                        <a href="javascript:void(0);" className="text-muted" data-toggle="tooltip" data-placement="top" title="" data-original-title="Delete"><i className="mdi mdi-close font-18"></i></a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <a href="#" className="font-600 text-muted">#45123698</a>
                                    </td>
                                    <td>$241</td>
                                    <td>July 14, 2017</td>
                                    <td><i className="fa fa-cc-paypal text-muted font-20"></i> </td>
                                    <td>Nikolaj S. Henriksen</td>
                                    <td><span className="badge badge-warning">Refund</span></td>
                                    <td>
                                        <a href="javascript:void(0);" className="m-r-15 text-muted" data-toggle="tooltip" data-placement="top" title="" data-original-title="Edit"><i className="mdi mdi-pencil font-18"></i></a>
                                        <a href="javascript:void(0);" className="text-muted" data-toggle="tooltip" data-placement="top" title="" data-original-title="Delete"><i className="mdi mdi-close font-18"></i></a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <a href="#" className="font-600 text-muted">#85214796</a>
                                    </td>
                                    <td>$541.34</td>
                                    <td>Jul 15, 2017</td>
                                    <td><i className="fa fa-cc-paypal text-muted font-20"></i> </td>
                                    <td>Kasper S. Jessen</td>
                                    <td><span className="badge badge-success">Paid</span></td>
                                    <td>
                                        <a href="javascript:void(0);" className="m-r-15 text-muted" data-toggle="tooltip" data-placement="top" title="" data-original-title="Edit"><i className="mdi mdi-pencil font-18"></i></a>
                                        <a href="javascript:void(0);" className="text-muted" data-toggle="tooltip" data-placement="top" title="" data-original-title="Delete"><i className="mdi mdi-close font-18"></i></a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <a href="#" className="font-600 text-muted">#23145216</a>
                                    </td>
                                    <td>$22</td>
                                    <td>Jul 11, 2017</td>
                                    <td><i className="fa fa-cc-amex text-muted font-20"></i> </td>
                                    <td>Lasse C. Overgaard</td>
                                    <td><span className="badge badge-success">Paid</span></td>
                                    <td>
                                        <a href="javascript:void(0);" className="m-r-15 text-muted" data-toggle="tooltip" data-placement="top" title="" data-original-title="Edit"><i className="mdi mdi-pencil font-18"></i></a>
                                        <a href="javascript:void(0);" className="text-muted" data-toggle="tooltip" data-placement="top" title="" data-original-title="Delete"><i className="mdi mdi-close font-18"></i></a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <a href="#" className="font-600 text-muted">#12365474</a>
                                    </td>
                                    <td>$1,541</td>
                                    <td>Jul 10, 2017</td>
                                    <td><i className="fa fa-cc-mastercard text-muted font-20"></i> </td>
                                    <td>Johan E. Knudsen</td>
                                    <td><span className="badge badge-danger">Chargeback</span></td>
                                    <td>
                                        <a href="javascript:void(0);" className="m-r-15 text-muted" data-toggle="tooltip" data-placement="top" title="" data-original-title="Edit"><i className="mdi mdi-pencil font-18"></i></a>
                                        <a href="javascript:void(0);" className="text-muted" data-toggle="tooltip" data-placement="top" title="" data-original-title="Delete"><i className="mdi mdi-close font-18"></i></a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <a href="#" className="font-600 text-muted">#32569874</a>
                                    </td>
                                    <td>$54</td>
                                    <td>Jul 09, 2017</td>
                                    <td><i className="fa fa-cc-visa text-muted font-20"></i> </td>
                                    <td>Herbert C. Patton</td>
                                    <td><span className="badge badge-success">Paid</span></td>
                                    <td>
                                        <a href="javascript:void(0);" className="m-r-15 text-muted" data-toggle="tooltip" data-placement="top" title="" data-original-title="Edit"><i className="mdi mdi-pencil font-18"></i></a>
                                        <a href="javascript:void(0);" className="text-muted" data-toggle="tooltip" data-placement="top" title="" data-original-title="Delete"><i className="mdi mdi-close font-18"></i></a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <a href="#" className="font-600 text-muted">#52147321</a>
                                    </td>
                                    <td>$845</td>
                                    <td>Jul 08, 2017</td>
                                    <td><i className="fa fa-cc-discover text-muted font-20"></i> </td>
                                    <td>Mathias N. Klausen</td>
                                    <td><span className="badge badge-success">Paid</span></td>
                                    <td>
                                        <a href="javascript:void(0);" className="m-r-15 text-muted" data-toggle="tooltip" data-placement="top" title="" data-original-title="Edit"><i className="mdi mdi-pencil font-18"></i></a>
                                        <a href="javascript:void(0);" className="text-muted" data-toggle="tooltip" data-placement="top" title="" data-original-title="Delete"><i className="mdi mdi-close font-18"></i></a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <a href="#" className="font-600 text-muted">#84125369</a>
                                    </td>
                                    <td>$421</td>
                                    <td>Jul 08, 2017</td>
                                    <td><i className="fa fa-cc-paypal text-muted font-20"></i> </td>
                                    <td>Nikolaj S. Henriksen</td>
                                    <td><span className="badge badge-danger">Chargeback</span></td>
                                    <td>
                                        <a href="javascript:void(0);" className="m-r-15 text-muted" data-toggle="tooltip" data-placement="top" title="" data-original-title="Edit"><i className="mdi mdi-pencil font-18"></i></a>
                                        <a href="javascript:void(0);" className="text-muted" data-toggle="tooltip" data-placement="top" title="" data-original-title="Delete"><i className="mdi mdi-close font-18"></i></a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <a href="#" className="font-600 text-muted">#74512368</a>
                                    </td>
                                    <td>$652</td>
                                    <td>Jul 02, 2017</td>
                                    <td><i className="fa fa-cc-mastercard text-muted font-20"></i> </td>
                                    <td>Lasse C. Overgaard</td>
                                    <td><span className="badge badge-danger">Chargeback</span></td>
                                    <td>
                                        <a href="javascript:void(0);" className="m-r-15 text-muted" data-toggle="tooltip" data-placement="top" title="" data-original-title="Edit"><i className="mdi mdi-pencil font-18"></i></a>
                                        <a href="javascript:void(0);" className="text-muted" data-toggle="tooltip" data-placement="top" title="" data-original-title="Delete"><i className="mdi mdi-close font-18"></i></a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <a href="#" className="font-600 text-muted">#52140300</a>
                                    </td>
                                    <td>$45</td>
                                    <td>Jul 20, 2017</td>
                                    <td><i className="fa fa-cc-visa text-muted font-20"></i> </td>
                                    <td>Herbert C. Patton</td>
                                    <td><span className="badge badge-success">Paid</span></td>
                                    <td>
                                        <a href="javascript:void(0);" className="m-r-15 text-muted" data-toggle="tooltip" data-placement="top" title="" data-original-title="Edit"><i className="mdi mdi-pencil font-18"></i></a>
                                        <a href="javascript:void(0);" className="text-muted" data-toggle="tooltip" data-placement="top" title="" data-original-title="Delete"><i className="mdi mdi-close font-18"></i></a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <a href="#" className="font-600 text-muted">#85214369</a>
                                    </td>
                                    <td>$521</td>
                                    <td>Jul 18, 2017</td>
                                    <td><i className="fa fa-cc-mastercard text-muted font-20"></i> </td>
                                    <td>Mathias N. Klausen</td>
                                    <td><span className="badge badge-success">Paid</span></td>
                                    <td>
                                        <a href="javascript:void(0);" className="m-r-15 text-muted" data-toggle="tooltip" data-placement="top" title="" data-original-title="Edit"><i className="mdi mdi-pencil font-18"></i></a>
                                        <a href="javascript:void(0);" className="text-muted" data-toggle="tooltip" data-placement="top" title="" data-original-title="Delete"><i className="mdi mdi-close font-18"></i></a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <a href="#" className="font-600 text-muted">#87412456</a>
                                    </td>
                                    <td>$241</td>
                                    <td>July 14, 2017</td>
                                    <td><i className="fa fa-cc-paypal text-muted font-20"></i> </td>
                                    <td>Nikolaj S. Henriksen</td>
                                    <td><span className="badge badge-danger">Chargeback</span></td>
                                    <td>
                                        <a href="javascript:void(0);" className="m-r-15 text-muted" data-toggle="tooltip" data-placement="top" title="" data-original-title="Edit"><i className="mdi mdi-pencil font-18"></i></a>
                                        <a href="javascript:void(0);" className="text-muted" data-toggle="tooltip" data-placement="top" title="" data-original-title="Delete"><i className="mdi mdi-close font-18"></i></a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <a href="#" className="font-600 text-muted">#99541241</a>
                                    </td>
                                    <td>$541.34</td>
                                    <td>Jul 15, 2017</td>
                                    <td><i className="fa fa-cc-paypal text-muted font-20"></i> </td>
                                    <td>Kasper S. Jessen</td>
                                    <td><span className="badge badge-success">Paid</span></td>
                                    <td>
                                        <a href="javascript:void(0);" className="m-r-15 text-muted" data-toggle="tooltip" data-placement="top" title="" data-original-title="Edit"><i className="mdi mdi-pencil font-18"></i></a>
                                        <a href="javascript:void(0);" className="text-muted" data-toggle="tooltip" data-placement="top" title="" data-original-title="Delete"><i className="mdi mdi-close font-18"></i></a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <a href="#" className="font-600 text-muted">#12354781</a>
                                    </td>
                                    <td>$22</td>
                                    <td>Jul 11, 2017</td>
                                    <td><i className="fa fa-cc-amex text-muted font-20"></i> </td>
                                    <td>Lasse C. Overgaard</td>
                                    <td><span className="badge badge-success">Paid</span></td>
                                    <td>
                                        <a href="javascript:void(0);" className="m-r-15 text-muted" data-toggle="tooltip" data-placement="top" title="" data-original-title="Edit"><i className="mdi mdi-pencil font-18"></i></a>
                                        <a href="javascript:void(0);" className="text-muted" data-toggle="tooltip" data-placement="top" title="" data-original-title="Delete"><i className="mdi mdi-close font-18"></i></a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <a href="#" className="font-600 text-muted">#95412367</a>
                                    </td>
                                    <td>$1,541</td>
                                    <td>Jul 10, 2017</td>
                                    <td><i className="fa fa-cc-mastercard text-muted font-20"></i> </td>
                                    <td>Johan E. Knudsen</td>
                                    <td><span className="badge badge-success">Paid</span></td>
                                    <td>
                                        <a href="javascript:void(0);" className="m-r-15 text-muted" data-toggle="tooltip" data-placement="top" title="" data-original-title="Edit"><i className="mdi mdi-pencil font-18"></i></a>
                                        <a href="javascript:void(0);" className="text-muted" data-toggle="tooltip" data-placement="top" title="" data-original-title="Delete"><i className="mdi mdi-close font-18"></i></a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <a href="#" className="font-600 text-muted">#96254137</a>
                                    </td>
                                    <td>$54</td>
                                    <td>Jul 09, 2017</td>
                                    <td><i className="fa fa-cc-visa text-muted font-20"></i> </td>
                                    <td>Herbert C. Patton</td>
                                    <td><span className="badge badge-success">Paid</span></td>
                                    <td>
                                        <a href="javascript:void(0);" className="m-r-15 text-muted" data-toggle="tooltip" data-placement="top" title="" data-original-title="Edit"><i className="mdi mdi-pencil font-18"></i></a>
                                        <a href="javascript:void(0);" className="text-muted" data-toggle="tooltip" data-placement="top" title="" data-original-title="Delete"><i className="mdi mdi-close font-18"></i></a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <a href="#" className="font-600 text-muted">#50025441</a>
                                    </td>
                                    <td>$845</td>
                                    <td>Jul 08, 2017</td>
                                    <td><i className="fa fa-cc-discover text-muted font-20"></i> </td>
                                    <td>Mathias N. Klausen</td>
                                    <td><span className="badge badge-warning">Refund</span></td>
                                    <td>
                                        <a href="javascript:void(0);" className="m-r-15 text-muted" data-toggle="tooltip" data-placement="top" title="" data-original-title="Edit"><i className="mdi mdi-pencil font-18"></i></a>
                                        <a href="javascript:void(0);" className="text-muted" data-toggle="tooltip" data-placement="top" title="" data-original-title="Delete"><i className="mdi mdi-close font-18"></i></a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <a href="#" className="font-600 text-muted">#32147851</a>
                                    </td>
                                    <td>$421</td>
                                    <td>Jul 08, 2017</td>
                                    <td><i className="fa fa-cc-paypal text-muted font-20"></i> </td>
                                    <td>Nikolaj S. Henriksen</td>
                                    <td><span className="badge badge-success">Paid</span></td>
                                    <td>
                                        <a href="javascript:void(0);" className="m-r-15 text-muted" data-toggle="tooltip" data-placement="top" title="" data-original-title="Edit"><i className="mdi mdi-pencil font-18"></i></a>
                                        <a href="javascript:void(0);" className="text-muted" data-toggle="tooltip" data-placement="top" title="" data-original-title="Delete"><i className="mdi mdi-close font-18"></i></a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <a href="#" className="font-600 text-muted">#52146321</a>
                                    </td>
                                    <td>$652</td>
                                    <td>Jul 02, 2017</td>
                                    <td><i className="fa fa-cc-mastercard text-muted font-20"></i> </td>
                                    <td>Lasse C. Overgaard</td>
                                    <td><span className="badge badge-success">Paid</span></td>
                                    <td>
                                        <a href="javascript:void(0);" className="m-r-15 text-muted" data-toggle="tooltip" data-placement="top" title="" data-original-title="Edit"><i className="mdi mdi-pencil font-18"></i></a>
                                        <a href="javascript:void(0);" className="text-muted" data-toggle="tooltip" data-placement="top" title="" data-original-title="Delete"><i className="mdi mdi-close font-18"></i></a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <a href="#" className="font-600 text-muted">#32147851</a>
                                    </td>
                                    <td>$421</td>
                                    <td>Jul 08, 2017</td>
                                    <td><i className="fa fa-cc-paypal text-muted font-20"></i> </td>
                                    <td>Nikolaj S. Henriksen</td>
                                    <td><span className="badge badge-success">Paid</span></td>
                                    <td>
                                        <a href="javascript:void(0);" className="m-r-15 text-muted" data-toggle="tooltip" data-placement="top" title="" data-original-title="Edit"><i className="mdi mdi-pencil font-18"></i></a>
                                        <a href="javascript:void(0);" className="text-muted" data-toggle="tooltip" data-placement="top" title="" data-original-title="Delete"><i className="mdi mdi-close font-18"></i></a>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
    );
}

export default CashoutsList;   