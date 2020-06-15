import Dashboard from "./views/admin/Dashboard";
import Reports from "./views/admin/Reports";
import ProductsList from "./views/admin/products/ProductsList";
import ProductsDetail from "./views/admin/products/ProductsDetail";
import OrdersList from "./views/admin/orders/OrdersList";
import OrdersDetail from "./views/admin/orders/OrdersDetail";
import TransactionsList from "./views/admin/transactions/TransactionsList";
import TransactionsDetail from "./views/admin/transactions/TransactionsDetail";
import CashoutsList from "./views/admin/cashouts/CashoutsList";
import CashoutsDetail from "./views/admin/cashouts/CashoutsDetail";
import Settings from "./views/admin/Settings";

import Login from "./views/auth/Login";
import Register from "./views/auth/Register";
import Forgot from "./views/auth/Forgot";
import Setup from "./views/auth/Setup";
import Verify from "./views/auth/Verify";
import VerifyForgot from "./views/auth/VerifyForgot";
import NewPassword from "./views/auth/newPassword";
import MyShops from "./views/auth/MyShops";

export default [
	{
		path: "dashboard",
		component: Dashboard,
		layout: '/admin'
	},
	{
		path: "setup",
		component: Setup,
		layout: '/admin'
	},
	{
		path: "reports",
		component: Reports,
		layout: '/admin'
	},
	{
		path: "products",
		component: ProductsList,
		layout: '/admin'
	},
	{
		path: "products/:product_id",
		component: ProductsDetail,
		layout: '/admin'
	},
	{
		path: "orders",
		component: OrdersList,
		layout: '/admin'
	},
	{
		path: "orders/:order_id",
		component: OrdersDetail,
		layout: '/admin'
	},
	{
		path: "transactions",
		component: TransactionsList,
		layout: '/admin'
	},
	{
		path: "transactions/:payment_id",
		component: TransactionsDetail,
		layout: '/admin'
	},
	{
		path: "cashouts",
		component: CashoutsList,
		layout: '/admin'
	},
	{
		path: "cashouts/:cashout_id",
		component: CashoutsDetail,
		layout: '/admin'
	},
	{
		path: "settings",
		component: Settings,
		layout: '/admin'
	},
	{
		path: "login",
		component: Login,
		layout: '/auth'
	},
	{
		path: "register",
		component: Register,
		layout: '/auth'
	},
	{
		path: "verify-phone",
		component: Verify,
		layout: '/auth'
	},
	{
		path: "forgot-password",
		component: Forgot,
		layout: '/auth'
	},{
		path: "verify-forgot-password",
		component: VerifyForgot,
		layout: '/auth'
	},
	{
		path: "reset-password",
		component: NewPassword,
		layout: '/auth'
	},
	{
		path: "verification-code",
		component: ProductsDetail,
		layout: '/auth'
	},
	{
		path: "setup",
		component: Setup,
		layout: '/auth'
	},
	{
		path: "shops",
		component: MyShops,
		layout: '/auth'
	},
]
