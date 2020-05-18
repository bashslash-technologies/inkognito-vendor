import Dashboard from "../views/main/Dashboard";
import ProductsList from "../views/main/products/ProductsList";
import ProductsDetail from "../views/main/products/ProductsDetail";

export default [
	{
		path: "dashboard",
		component: Dashboard,
	},
	{
		path: "products",
		component: ProductsList,
	},
	{
		path: "products/:product_id",
		component: ProductsDetail,
	},
]




/*
import Dashboard1 from "../containers/MainContent/Dashboard/Dashboard1";
import Dashboard2 from "../containers/MainContent/Dashboard/Dashboard2";

import Calendar from "../containers/MainContent/Calendar/calendar";

import Ecommerce_customers from "../containers/MainContent/Ecommerce/Ecommerce_customers";
import Ecommerce_order_history from "../containers/MainContent/Ecommerce/Ecommerce_order_history";
import Ecommerce_product_edit from "../containers/MainContent/Ecommerce/Ecommerce_product_edit";
import Ecommerce_product_grid from "../containers/MainContent/Ecommerce/Ecommerce_product_grid";
import Ecommerce_product_list from "../containers/MainContent/Ecommerce/Ecommerce_product_list";

import Email_compose from "../containers/MainContent/Email/Email_compose";
import Email_inbox from "../containers/MainContent/Email/Email_inbox";
import Email_read from "../containers/MainContent/Email/Email_read";
import Email_templates_alert from "../containers/MainContent/Email/Email_templates_alert";
import Email_templates_basic from "../containers/MainContent/Email/Email_templates_basic";
import Email_templates_billing from "../containers/MainContent/Email/Email_templates_billing";

import Form_advanced from "../containers/MainContent/Forms/Form_advanced";
import Form_editors from "../containers/MainContent/Forms/Form_editors";
import Form_elements from "../containers/MainContent/Forms/Form_elements";
import Form_mask from "../containers/MainContent/Forms/Form_mask";
import Form_summernote from "../containers/MainContent/Forms/Form_summernote";
import Form_uploads from "../containers/MainContent/Forms/Form_uploads";
import Form_validation from "../containers/MainContent/Forms/Form_validation";
import Form_wizard from "../containers/MainContent/Forms/Form_wizard";
import Form_xeditable from "../containers/MainContent/Forms/Form_xeditable";

import Icons_dripicons from "../containers/MainContent/Icons/Icons_dripicons";
import Icons_fontawesome from "../containers/MainContent/Icons/Icons_fontawesome";
import Icons_ion from "../containers/MainContent/Icons/Icons_ion";
import Icons_material from "../containers/MainContent/Icons/Icons_material";
import Icons_mobirise from "../containers/MainContent/Icons/Icons_mobirise";
import Icons_themify from "../containers/MainContent/Icons/Icons_themify";
import Icons_typicons from "../containers/MainContent/Icons/Icons_typicons";
import Icons_weather from "../containers/MainContent/Icons/Icons_weather";

import Maps_google from "../containers/MainContent/Maps/Maps_google";
import Maps_vector from "../containers/MainContent/Maps/Maps_vector";

import Pages_400 from "../containers/MainContent/Pages/Pages_400";
import Pages_timeline from "../containers/MainContent/Pages/Pages_timeline";
import Pages_500 from "../containers/MainContent/Pages/Pages_500";
import Pages_blank from "../containers/MainContent/Pages/Pages_blank";
import Pages_coming_soon from "../containers/MainContent/Pages/Pages_coming_soon";
import Pages_contact from "../containers/MainContent/Pages/Pages_contact";
import Pages_directory from "../containers/MainContent/Pages/Pages_directory";
import Pages_faq from "../containers/MainContent/Pages/Pages_faq";
import Pages_gallery from "../containers/MainContent/Pages/Pages_gallery";
import Pages_invoice from "../containers/MainContent/Pages/Pages_invoice";
import Pages_lock_screen from "../containers/MainContent/Pages/Pages_lock_screen";
import Pages_lock_screen_2 from "../containers/MainContent/Pages/Pages_lock_screen_2";
import Pages_login from "../containers/MainContent/Pages/Pages_login";
import Pages_login_2 from "../containers/MainContent/Pages/Pages_login_2";
import Pages_maintenance from "../containers/MainContent/Pages/Pages_maintenance";
import Pages_pricing from "../containers/MainContent/Pages/Pages_pricing";
import Pages_recoverpw from "../containers/MainContent/Pages/Pages_recoverpw";
import Pages_recoverpw_2 from "../containers/MainContent/Pages/Pages_recoverpw_2";
import Pages_register from "../containers/MainContent/Pages/Pages_register";
import Pages_register_2 from "../containers/MainContent/Pages/Pages_register_2";

import Tables_basic from "../containers/MainContent/Tables/Tables_basic";
import Tables_datatable from "../containers/MainContent/Tables/Tables_datatable";
import Tables_editable from "../containers/MainContent/Tables/Tables_editable";
import Tables_responsive from "../containers/MainContent/Tables/Tables_responsive";

import Ui_alertify from "../containers/MainContent/UiElements/Ui_alertify";
import Ui_alerts from "../containers/MainContent/UiElements/Ui_alerts";
import Ui_animation from "../containers/MainContent/UiElements/Ui_animation";
import Ui_badge from "../containers/MainContent/UiElements/Ui_badge";
import Ui_buttons from "../containers/MainContent/UiElements/Ui_buttons";
import Ui_cards from "../containers/MainContent/UiElements/Ui_cards";
import Ui_carousel from "../containers/MainContent/UiElements/Ui_carousel";
import Ui_colors from "../containers/MainContent/UiElements/Ui_colors";
import Ui_dropdowns from "../containers/MainContent/UiElements/Ui_dropdowns";
import Ui_grid from "../containers/MainContent/UiElements/Ui_grid";
import Ui_highlight from "../containers/MainContent/UiElements/Ui_highlight";
import Ui_images from "../containers/MainContent/UiElements/Ui_images";
import Ui_lightbox from "../containers/MainContent/UiElements/Ui_lightbox";
import Ui_modals from "../containers/MainContent/UiElements/Ui_modals";
import Ui_navs from "../containers/MainContent/UiElements/Ui_navs";
import Ui_nestable from "../containers/MainContent/UiElements/Ui_nestable";
import Ui_pagination from "../containers/MainContent/UiElements/Ui_pagination";
import Ui_popover_tooltips from "../containers/MainContent/UiElements/Ui_popover_tooltips";
import Ui_progressbars from "../containers/MainContent/UiElements/Ui_progressbars";
import Ui_rangeslider from "../containers/MainContent/UiElements/Ui_rangeslider";
import Ui_rating from "../containers/MainContent/UiElements/Ui_rating";
import Ui_sessiontimeout from "../containers/MainContent/UiElements/Ui_sessiontimeout";
import Ui_sweet_alert from "../containers/MainContent/UiElements/Ui_sweet_alert";
import Ui_tabs_accordions from "../containers/MainContent/UiElements/Ui_tabs_accordions";
import Ui_typography from "../containers/MainContent/UiElements/Ui_typography";
import Ui_video from "../containers/MainContent/UiElements/Ui_video";

import Charts_easy from "../containers/MainContent/Charts/Charts_easy";
import Chartjs from "../containers/MainContent/Charts/Chartjs";
import ApexChart from "../containers/MainContent/Charts/ApexChart";
import SparkLine from "../containers/MainContent/Charts/SparkLine";

import Widgets from "../containers/MainContent/Widgets/widgets";

export default [
	{
		path: "/ink/",
		component: Dashboard1,
	},
	{
		path: "/dasboard2",
		component: Dashboard2,
	},
	{
		path: "/ink/calendar",
		component: Calendar,
	},
	{
		path: "/ink/ecommerce_customers",
		component: Ecommerce_customers,
	},
	{
		path: "/ink/ecommerce_order_history",
		component: Ecommerce_order_history,
	},
	{
		path: "/ink/ecommerce_product_edit",
		component: Ecommerce_product_edit,
	},
	{
		path: "/ink/ecommerce_product_grid",
		component: Ecommerce_product_grid,
	},
	{
		path: "/ink/ecommerce_product_list",
		component: Ecommerce_product_list,
	},
	{
		path: "/ink/email_compose",
		component: Email_compose,
	},
	{
		path: "/ink/email_inbox",
		component: Email_inbox,
	},
	{
		path: "/ink/email_read",
		component: Email_read,
	},
	{
		path: "/ink/email_templates_alert",
		component: Email_templates_alert,
	},
	{
		path: "/ink/email_templates_basic",
		component: Email_templates_basic,
	},
	{
		path: "/ink/email_templates_billing",
		component: Email_templates_billing,
	},
	{
		path: "/ink/form_advanced",
		component: Form_advanced,
	},
	{
		path: "/ink/form_editors",
		component: Form_editors,
	},
	{
		path: "/ink/form_elements",
		component: Form_elements,
	},
	{
		path: "/ink/form_mask",
		component: Form_mask,
	},
	{
		path: "/ink/form_summernote",
		component: Form_summernote,
	},
	{
		path: "/ink/form_uploads",
		component: Form_uploads,
	},
	{
		path: "/ink/form_validation",
		component: Form_validation,
	},
	{
		path: "/ink/form_wizard",
		component: Form_wizard,
	},
	{
		path: "/ink/form_xeditable",
		component: Form_xeditable,
	},
	{
		path: "/ink/maps_google",
		component: Maps_google,
	},
	//Todo: contine the routes from here
	{
		path: "/ink/",
		component: Dashboard1,
	},
	{
		path: "/ink/",
		component: Dashboard1,
	},
	{
		path: "/ink/",
		component: Dashboard1,
	},
	{
		path: "/ink/",
		component: Dashboard1,
	},
	{
		path: "/ink/",
		component: Dashboard1,
	},
	{
		path: "/ink/",
		component: Dashboard1,
	},
	{
		path: "/ink/",
		component: Dashboard1,
	},
	{
		path: "/ink/",
		component: Dashboard1,
	},
	{
		path: "/ink/",
		component: Dashboard1,
	},
	{
		path: "/ink/",
		component: Dashboard1,
	},
	{
		path: "/ink/",
		component: Dashboard1,
	},
	{
		path: "/ink/",
		component: Dashboard1,
	},
	{
		path: "/ink/",
		component: Dashboard1,
	},
	{
		path: "/ink/",
		component: Dashboard1,
	},
	{
		path: "/ink/",
		component: Dashboard1,
	},
	{
		path: "/ink/",
		component: Dashboard1,
	},
	{
		path: "/ink/",
		component: Dashboard1,
	},
	{
		path: "/ink/",
		component: Dashboard1,
	},
	{
		path: "/ink/",
		component: Dashboard1,
	},
	{
		path: "/ink/",
		component: Dashboard1,
	},
	{
		path: "/ink/",
		component: Dashboard1,
	},
];

*/