import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const Sidebar = () => {

	return (
		<div id="side-panel">
			<div className="p-2">
				<div className="card card-blue-grey">
					<div className="card-body p-2"><i className="mdi mdi-account-circle mr-3"></i>ID: 34934934</div>
				</div>
			</div>
			<ul>
				<li>
					<NavLink className="nav-link" activeClassName="nav-active" to="/admin/dashboard"><i className="mdi mdi-view-dashboard mr-3"></i>Dashboard</NavLink>
				</li>
				<li>
					<NavLink className="nav-link" activeClassName="nav-active" to="/admin/products"><i className="mdi mdi-cube-outline mr-3"></i>Products</NavLink>
				</li>
				<li>
					<NavLink className="nav-link" activeClassName="nav-active" to="/admin/orders"><i className="mdi mdi-cart-outline mr-3"></i>Orders</NavLink>
				</li>
				<li>
					<NavLink className="nav-link" activeClassName="nav-active" to="/admin/payments"><i className="mdi mdi-airplane mr-3"></i>Payments</NavLink>
				</li>
				<li>
					<NavLink className="nav-link" activeClassName="nav-active" to="/admin/cashouts"><i className="mdi mdi-airplane mr-3"></i>Cashouts</NavLink>
				</li>
			</ul>
			<ul style={{position: 'absolute', bottom: 0}}>
				<li>
					<NavLink className="nav-link" activeClassName="nav-active" to="/admin/reports"><i className="mdi mdi-airplane mr-3"></i>Reports</NavLink>
				</li>
				<li>
					<NavLink className="nav-link" activeClassName="nav-active" to="/admin/cashouts"><i className="mdi mdi-settings mr-3"></i>Settings</NavLink>
				</li>
				<li>
					<NavLink className="nav-link" activeClassName="nav-active" to="/admin/reports"><i className="mdi mdi-power mr-3 text-danger"></i>Logout</NavLink>
				</li>
			</ul>
		</div>
	);
}

export default Sidebar;