import Dashboard from "./views/admin/Dashboard";
import Reports from "./views/admin/Reports";
import ProductsList from "./views/admin/products/ProductsList";
import ProductsDetail from "./views/admin/products/ProductsDetail";
import OrdersList from "./views/admin/orders/OrdersList";
import OrdersDetail from "./views/admin/orders/OrdersDetail";
import PaymentsList from "./views/admin/payments/PaymentsList";
import PaymentsDetail from "./views/admin/payments/PaymentsDetail";
import CashoutsList from "./views/admin/cashouts/CashoutsList";
import CashoutsDetail from "./views/admin/cashouts/CashoutsDetail";
import Settings from "./views/admin/Settings";

import Login from "./views/auth/Login";
import Register from "./views/auth/Register";
import Forgot from "./views/auth/Forgot";
import Setup from "./views/auth/Setup";

export default [
	{
		path: "dashboard",
		component: Dashboard,
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
		path: "payments",
		component: PaymentsList,
		layout: '/admin'
	},
	{
		path: "payments/:payment_id",
		component: PaymentsDetail,
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
		path: "verify-mail",
		component: ProductsDetail,
		layout: '/auth'
	},
	{
		path: "forgot-password",
		component: Forgot,
		layout: '/auth'
	},
	{
		path: "reset-password",
		component: ProductsDetail,
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
]
