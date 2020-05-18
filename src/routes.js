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
		path: "signin",
		component: ProductsDetail,
		layout: '/auth'
	},
	{
		path: "register",
		component: ProductsDetail,
		layout: '/auth'
	},
	{
		path: "verify-mail",
		component: ProductsDetail,
		layout: '/auth'
	},
	{
		path: "forgot-password",
		component: ProductsDetail,
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
]
