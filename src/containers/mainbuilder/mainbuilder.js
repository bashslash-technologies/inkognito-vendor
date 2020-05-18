import React , { Component } from 'react';
import Dashboard1 from '../MainContent/Dashboard/Dashboard1';
import Dashboard2 from '../MainContent/Dashboard/Dashboard2';

import Calendar from '../MainContent/Calendar/calendar';

import Ecommerce_customers from '../MainContent/Ecommerce/Ecommerce_customers';
import Ecommerce_order_history from '../MainContent/Ecommerce/Ecommerce_order_history';
import Ecommerce_product_edit from '../MainContent/Ecommerce/Ecommerce_product_edit';
import Ecommerce_product_grid from '../MainContent/Ecommerce/Ecommerce_product_grid';
import Ecommerce_product_list from '../MainContent/Ecommerce/Ecommerce_product_list';


import Email_compose from '../MainContent/Email/Email_compose';
import Email_inbox from '../MainContent/Email/Email_inbox';
import Email_read from '../MainContent/Email/Email_read';
import Email_templates_alert from '../MainContent/Email/Email_templates_alert';
import Email_templates_basic from '../MainContent/Email/Email_templates_basic';
import Email_templates_billing from '../MainContent/Email/Email_templates_billing';

import Form_advanced from '../MainContent/Forms/Form_advanced';
import Form_editors from '../MainContent/Forms/Form_editors';
import Form_elements from '../MainContent/Forms/Form_elements';
import Form_mask from '../MainContent/Forms/Form_mask';
import Form_summernote from '../MainContent/Forms/Form_summernote';
import Form_uploads from '../MainContent/Forms/Form_uploads';
import Form_validation from '../MainContent/Forms/Form_validation';
import Form_wizard from '../MainContent/Forms/Form_wizard';
import Form_xeditable from '../MainContent/Forms/Form_xeditable';

import Icons_dripicons from '../MainContent/Icons/Icons_dripicons';
import Icons_fontawesome from '../MainContent/Icons/Icons_fontawesome';
import Icons_ion from '../MainContent/Icons/Icons_ion';
import Icons_material from '../MainContent/Icons/Icons_material';
import Icons_mobirise from '../MainContent/Icons/Icons_mobirise';
import Icons_themify from '../MainContent/Icons/Icons_themify';
import Icons_typicons from '../MainContent/Icons/Icons_typicons';
import Icons_weather from '../MainContent/Icons/Icons_weather';

import Maps_google from '../MainContent/Maps/Maps_google';
import Maps_vector from '../MainContent/Maps/Maps_vector';

import Pages_400 from '../MainContent/Pages/Pages_400';
import Pages_timeline from '../MainContent/Pages/Pages_timeline';
import Pages_500 from '../MainContent/Pages/Pages_500';
import Pages_blank from '../MainContent/Pages/Pages_blank';
import Pages_coming_soon from '../MainContent/Pages/Pages_coming_soon';
import Pages_contact from '../MainContent/Pages/Pages_contact';
import Pages_directory from '../MainContent/Pages/Pages_directory';
import Pages_faq from '../MainContent/Pages/Pages_faq';
import Pages_gallery from '../MainContent/Pages/Pages_gallery';
import Pages_invoice from '../MainContent/Pages/Pages_invoice';
import Pages_lock_screen from '../MainContent/Pages/Pages_lock_screen';
import Pages_lock_screen_2 from '../MainContent/Pages/Pages_lock_screen_2';
import Pages_login from '../MainContent/Pages/Pages_login';
import Pages_login_2 from '../MainContent/Pages/Pages_login_2';
import Pages_maintenance from '../MainContent/Pages/Pages_maintenance';
import Pages_pricing from '../MainContent/Pages/Pages_pricing';
import Pages_recoverpw from '../MainContent/Pages/Pages_recoverpw';
import Pages_recoverpw_2 from '../MainContent/Pages/Pages_recoverpw_2';
import Pages_register from '../MainContent/Pages/Pages_register';
import Pages_register_2 from '../MainContent/Pages/Pages_register_2';

import Tables_basic from '../MainContent/Tables/Tables_basic';
import Tables_datatable from '../MainContent/Tables/Tables_datatable';
import Tables_editable from '../MainContent/Tables/Tables_editable';
import Tables_responsive from '../MainContent/Tables/Tables_responsive';

import Ui_alertify from '../MainContent/UiElements/Ui_alertify';
import Ui_alerts from '../MainContent/UiElements/Ui_alerts';
import Ui_animation from '../MainContent/UiElements/Ui_animation';
import Ui_badge from '../MainContent/UiElements/Ui_badge';
import Ui_buttons from '../MainContent/UiElements/Ui_buttons';
import Ui_cards from '../MainContent/UiElements/Ui_cards';
import Ui_carousel from '../MainContent/UiElements/Ui_carousel';
import Ui_colors from '../MainContent/UiElements/Ui_colors';
import Ui_dropdowns from '../MainContent/UiElements/Ui_dropdowns';
import Ui_grid from '../MainContent/UiElements/Ui_grid';
import Ui_highlight from '../MainContent/UiElements/Ui_highlight';
import Ui_images from '../MainContent/UiElements/Ui_images';
import Ui_lightbox from '../MainContent/UiElements/Ui_lightbox';
import Ui_modals from '../MainContent/UiElements/Ui_modals';
import Ui_navs from '../MainContent/UiElements/Ui_navs';
import Ui_nestable from '../MainContent/UiElements/Ui_nestable';
import Ui_pagination from '../MainContent/UiElements/Ui_pagination';
import Ui_popover_tooltips from '../MainContent/UiElements/Ui_popover_tooltips';
import Ui_progressbars from '../MainContent/UiElements/Ui_progressbars';
import Ui_rangeslider from '../MainContent/UiElements/Ui_rangeslider';
import Ui_rating from '../MainContent/UiElements/Ui_rating';
import Ui_sessiontimeout from '../MainContent/UiElements/Ui_sessiontimeout';
import Ui_sweet_alert from '../MainContent/UiElements/Ui_sweet_alert';
import Ui_tabs_accordions from '../MainContent/UiElements/Ui_tabs_accordions';
import Ui_typography from '../MainContent/UiElements/Ui_typography';
import Ui_video from '../MainContent/UiElements/Ui_video';

import Charts_easy from '../MainContent/Charts/Charts_easy';
import Chartjs from '../MainContent/Charts/Chartjs';
import ApexChart from '../MainContent/Charts/ApexChart';
import SparkLine from '../MainContent/Charts/SparkLine';


import Widgets from '../MainContent/Widgets/widgets';

import { Route,Switch } from 'react-router-dom';



class mainbuilder extends Component{
    render(){
        return(
                <Switch> 

                    
                   <Route path="/tempo/calendar" component={Calendar} />

                   <Route path="/tempo/ecommerce_customers" component={Ecommerce_customers} />
                   <Route path="/tempo/ecommerce_order_history" component={Ecommerce_order_history} />
                   <Route path="/tempo/ecommerce_product_edit" component={Ecommerce_product_edit} />
                   <Route path="/tempo/ecommerce_product_grid" component={Ecommerce_product_grid} />
                   <Route path="/tempo/ecommerce_product_list" component={Ecommerce_product_list} />

                   <Route path="/tempo/email_compose" component={Email_compose} />
                   <Route path="/tempo/email_inbox" component={Email_inbox} />
                   <Route path="/tempo/email_read" component={Email_read} />
                   <Route path="/tempo/email_templates_alert" component={Email_templates_alert} />
                   <Route path="/tempo/email_templates_basic" component={Email_templates_basic} />
                   <Route path="/tempo/email_templates_billing" component={Email_templates_billing} />

                   <Route path="/tempo/form_advanced" component={Form_advanced} />
                   <Route path="/tempo/form_editors" component={Form_editors} />
                   <Route path="/tempo/form_elements" component={Form_elements} />
                   <Route path="/tempo/form_mask" component={Form_mask} />
                   <Route path="/tempo/form_summernote" component={Form_summernote} />
                   <Route path="/tempo/form_uploads" component={Form_uploads} />
                   <Route path="/tempo/form_validation" component={Form_validation} />
                   <Route path="/tempo/form_wizard" component={Form_wizard} />
                   <Route path="/tempo/form_xeditable" component={Form_xeditable} />
                   
                   <Route path="/tempo/icons_dripicons" component={Icons_dripicons} />
                   <Route path="/tempo/icons_fontawesome" component={Icons_fontawesome} />
                   <Route path="/tempo/icons_ion" component={Icons_ion} />
                   <Route path="/tempo/icons_material" component={Icons_material} />
                   <Route path="/tempo/icons_mobirise" component={Icons_mobirise} />
                   <Route path="/tempo/icons_themify" component={Icons_themify} />
                   <Route path="/tempo/icons_typicons" component={Icons_typicons} />
                   <Route path="/tempo/icons_weather" component={Icons_weather} />

                   <Route path="/tempo/maps_google" component={Maps_google} />
                   <Route path="/tempo/maps_vector" component={Maps_vector} />
                   
                   <Route path="/tempo/pages_400" component={Pages_400} />
                   <Route path="/tempo/pages_timeline" component={Pages_timeline} />
                   <Route path="/tempo/pages_500" component={Pages_500} />
                   <Route path="/tempo/pages_blank" component={Pages_blank} />
                   <Route path="/tempo/pages_coming_soon" component={Pages_coming_soon} />
                   <Route path="/tempo/pages_contact" component={Pages_contact} />
                   <Route path="/tempo/pages_directory" component={Pages_directory} />
                   <Route path="/tempo/pages_faq" component={Pages_faq} />
                   <Route path="/tempo/pages_gallery" component={Pages_gallery} />
                   <Route path="/tempo/pages_invoice" component={Pages_invoice} />
                   <Route path="/tempo/pages_lock_screen" component={Pages_lock_screen} />
                   <Route path="/tempo/pages_lock_screen_2" component={Pages_lock_screen_2} />
                   <Route path="/tempo/pages_login" component={Pages_login} />
                   <Route path="/tempo/pages_login_2" component={Pages_login_2} />
                   <Route path="/tempo/pages_maintenance" component={Pages_maintenance} />
                   <Route path="/tempo/pages_pricing" component={Pages_pricing} />
                   <Route path="/tempo/pages_recoverpw" component={Pages_recoverpw} />
                   <Route path="/tempo/pages_recoverpw_2" component={Pages_recoverpw_2} />
                   <Route path="/tempo/pages_register" component={Pages_register} />
                   <Route path="/tempo/pages_register_2" component={Pages_register_2} />
                   
                   <Route path="/tempo/tables_basic" component={Tables_basic} />
                   <Route path="/tempo/tables_datatable" component={Tables_datatable} />
                   <Route path="/tempo/tables_editable" component={Tables_editable} />
                   <Route path="/tempo/tables_responsive" component={Tables_responsive} />
                   
                   <Route path="/tempo/ui_alertify" component={Ui_alertify} />
                   <Route path="/tempo/ui_alerts" component={Ui_alerts} />
                   <Route path="/tempo/ui_animation" component={Ui_animation} />
                   <Route path="/tempo/ui_badge" component={Ui_badge} />
                   <Route path="/tempo/ui_buttons" component={Ui_buttons} />
                   <Route path="/tempo/ui_cards" component={Ui_cards} />
                   <Route path="/tempo/ui_carousel" component={Ui_carousel} />
                   <Route path="/tempo/ui_colors" component={Ui_colors} />
                   <Route path="/tempo/ui_dropdowns" component={Ui_dropdowns} />
                   <Route path="/tempo/ui_grid" component={Ui_grid} />
                   <Route path="/tempo/ui_highlight" component={Ui_highlight} />
                   <Route path="/tempo/ui_images" component={Ui_images} />
                   <Route path="/tempo/ui_lightbox" component={Ui_lightbox} />
                   <Route path="/tempo/ui_modals" component={Ui_modals} />
                   <Route path="/tempo/ui_navs" component={Ui_navs} />
                   <Route path="/tempo/ui_nestable" component={Ui_nestable} />
                   <Route path="/tempo/ui_pagination" component={Ui_pagination} />
                   <Route path="/tempo/ui_popover_tooltips" component={Ui_popover_tooltips} />
                   <Route path="/tempo/ui_progressbars" component={Ui_progressbars} />
                   <Route path="/tempo/ui_rangeslider" component={Ui_rangeslider} />
                   <Route path="/tempo/ui_rating" component={Ui_rating} />
                   <Route path="/tempo/ui_sessiontimeout" component={Ui_sessiontimeout} />
                   <Route path="/tempo/ui_sweet_alert" component={Ui_sweet_alert} />
                   <Route path="/tempo/ui_tabs_accordions" component={Ui_tabs_accordions} />
                   <Route path="/tempo/ui_typography" component={Ui_typography} />
                   <Route path="/tempo/ui_video" component={Ui_video} />

                   <Route path="/tempo/widgets" component={Widgets} />

                   <Route path="/tempo/charts_easy" component={Charts_easy} />
                   <Route path="/tempo/chartjs" component={Chartjs} />
                   <Route path="/tempo/apexchart" component={ApexChart} />
                   <Route path="/tempo/sparkline" component={SparkLine} />
                   
                   
                   
                    <Route path="/tempo/dashboard2" component={Dashboard2} />
                    <Route path="/tempo/" component={Dashboard1} />
                    
                   

                </Switch>
        );
    }
}

export default mainbuilder;