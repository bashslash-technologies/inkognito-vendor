import React,{Fragment,useState} from 'react';
import { NavLink,useHistory } from 'react-router-dom';
import {CornerDialog} from 'evergreen-ui'
import {removeToken,removeUser} from '../util/storage'

const Sidebar = () => {
	const [logout, setLogout] = useState(false)
	const {push} = useHistory()
	const handleLogout = () => {
		removeToken()
		removeUser()
		push("/auth/login")
		setLogout(false)
	}

	return (
		<div id="side-panel" className="d-flex flex-column justify-content-between">
			<ul className="m-0">
				<div className="p-2">
					<div className="card card-blue-grey">
						<div className="card-body p-2"><i className="mdi mdi-account-circle mr-3"></i>ID: 34934934</div>
					</div>
				</div>
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
					<NavLink className="nav-link" activeClassName="nav-active" to="/admin/transactions"><i className="mdi mdi-transfer mr-3"></i>Transactions</NavLink>
				</li>
				<li>
					<NavLink className="nav-link" activeClassName="nav-active" to="/admin/cashouts"><i className="mdi mdi-wallet mr-3"></i>Cashouts</NavLink>
				</li>
			</ul>
			<ul className="m-0">
				<li>
					<NavLink className="nav-link" activeClassName="nav-active" to="/admin/reports"><i className="mdi mdi-file mr-3"></i>Reports</NavLink>
				</li>
				<li>
					<NavLink className="nav-link" activeClassName="nav-active" to="/admin/settings"><i className="mdi mdi-settings mr-3"></i>Settings</NavLink>
				</li>
				<li onClick={()=>setLogout(true)} >
					<a className="nav-link" activeClassName="nav-active"><i className="mdi mdi-power mr-3 text-danger"></i>Logout</a>
				</li>
			</ul>
			<CornerDialog
				title="We’d love to hear from you soon!"
				isShown={logout}
				confirmLabel={"Logout"}
				onConfirm={handleLogout}
				onCloseComplete={() => setLogout(false)}
			>
				Are you sure you want to logout?
			</CornerDialog>
		</div>
	);
}

export default Sidebar;
