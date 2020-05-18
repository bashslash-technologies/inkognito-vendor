import React, {Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem  } from 'reactstrap';
import { Scrollbars } from 'react-custom-scrollbars';
import $ from 'jquery';


class topbar extends Component {

   constructor(props) {
        super(props);
        this.state = {
            Tab: 'index', SubTab: '', MoreTab: '',
            dashboard_menu : false ,  ui_menu : false, comp_menu : false, page_menu : false,  eco_menu: false,pro_menu: false,
            dropdownOpen: false,
            dropdownOpen1: false,
            dropdownOpenprofile: false,
            dropdownOpenbadge: false,
            toggleEmail : false, 
            toggleForm: false,
            toggleChart: false,
            toggleTable: false,
            toggleIcon: false,
            toggleMap: false,
            toggleEmailTemp: false,
        };

        this.toggle = this.toggle.bind(this);
        this.toggle1 = this.toggle1.bind(this);
        this.toggleprofile = this.toggleprofile.bind(this);
        this.togglebadge = this.togglebadge.bind(this);
    }

    toggle() {
        this.setState(prevState => ({
          dropdownOpen: !prevState.dropdownOpen
        }));
      }
      toggle1() {
        this.setState(prevState => ({
          dropdownOpen1: !prevState.dropdownOpen1
        }));
      }
      toggleprofile() {
        this.setState(prevState => ({
          dropdownOpenprofile: !prevState.dropdownOpenprofile
        }));
      }
      togglebadge() {
        this.setState(prevState => ({
          dropdownOpenbadge: !prevState.dropdownOpenbadge
        }));
      }
      
    setActiveTab = (tab,subtab,moretab,toggleTab, e)=> {
        this.setState({Tab: tab,SubTab: subtab,MoreTab: moretab});
         if(subtab === 'email') { this.setState({ toggleEmail : toggleTab }) } 
         else if(subtab === 'form') { this.setState({ toggleForm : toggleTab })  }
         else if(subtab === 'chart') { this.setState({ toggleChart : toggleTab })  }
         else if(subtab === 'table') { this.setState({ toggleTable : toggleTab })  }
         else if(subtab === 'icon') { this.setState({ toggleIcon : toggleTab })  }
         else if(subtab === 'map') { this.setState({ toggleMap : toggleTab })  }
         else if(subtab === 'emt') { this.setState({ toggleEmailTemp : toggleTab })  }
         else{ }
    }

    componentDidMount() 
    {
        $('.navbar-toggle').on('click', function (event) {
            $(this).toggleClass('open');
            $('#navigation').slideToggle(400);
        });

        $('li.has-submenu #dest_id').on('click', function (event) {
            if ($(window).width() < 992) 
            {
                $('.navbar-toggle').toggleClass('open');
                $('#navigation').slideToggle(400);
            }
        });

        $('.navigation-menu>li').slice(-1).addClass('last-elements');

        $('.navigation-menu li.has-submenu a[href="#"]').on('click', function (e) {
            if ($(window).width() < 992) {
                e.preventDefault();
                $(this).parent('li').toggleClass('open').find('.submenu:first').toggleClass('open');
            }
        });

        $('.toggle-search').on('click', function () {
            var targetId = $(this).data('target');
            var $searchBar;
            if (targetId) {
                $searchBar = $(targetId);
                $searchBar.toggleClass('open');
            }
        });
    }

    togglescreen(e)
    {
        if (!document.fullscreenElement && !document.mozFullScreenElement && !document.webkitFullscreenElement) {  // current working methods
            if (document.documentElement.requestFullscreen) {
                document.documentElement.requestFullscreen();
            } else if (document.documentElement.mozRequestFullScreen) {
                document.documentElement.mozRequestFullScreen();
            } else if (document.documentElement.webkitRequestFullscreen) {
                document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
            }
        } else {
            if (document.cancelFullScreen) {
                document.cancelFullScreen();
            } else if (document.mozCancelFullScreen) {
                document.mozCancelFullScreen();
            } else if (document.webkitCancelFullScreen) {
                document.webkitCancelFullScreen();
            }
        }
    }

    render() {
        return (
            <header id="topnav">
                <div className="topbar-main">
                    <div className="container-fluid">
                        <div className="logo">
                            <Link to="/" className="logo"></Link>
                            <Link to="/" className="logo">
                                <img src="assets/images/logo-sm.png" alt="" height="30" />
                            </Link>
                        </div>
                        <div className="menu-extras topbar-custom">
                            <ul className="list-inline float-right mb-0">
                                <li className="list-inline-item dropdown notification-list hide-phone">
                                    <Link  onClick={() => this.togglescreen()}  className="nav-link waves-effect" to="#" id="btn-fullscreen">
                                        <i className="mdi mdi-fullscreen noti-icon"></i>
                                    </Link>
                                </li>
                                <li className="list-inline-item dropdown notification-list">
                                    <Dropdown isOpen={this.state.dropdownOpenbadge}  toggle={this.togglebadge}>
                                        <DropdownToggle className="nav-link dropdown-toggle droptest arrow-none waves-effect" tag="a">
                                            <i className="ion-ios7-bell noti-icon"></i>
                                            <span className="badge badge-pill badge-danger noti-icon-badge">3</span>
                                        </DropdownToggle>
                                        <DropdownMenu className="dropdown-menu dropdown-menu-right dropdown-menu-lg">
                                        <h6 className="dropdown-item-text">
                                                Notifications (258)
                                            </h6>
                                        <DropdownItem >
                                        <Scrollbars style={{ height: "200px" }} className="notification-item-list" >
                                        <Link id="ex" to="#" className="dropdown-item notify-item active">
                                            <div className="notify-icon bg-success"><i className="mdi mdi-cart-outline"></i></div>
                                            <p className="notify-details">Your order is placed<span className="text-muted">Dummy text of the printing and typesetting industry.</span></p>
                                        </Link>

                                        <Link id="ex" to="#" className="dropdown-item notify-item">
                                                <div className="notify-icon bg-warning"><i className="mdi mdi-message-text-outline"></i></div>
                                                <p className="notify-details">New Message received<span className="text-muted">You have 87 unread messages</span></p>
                                            </Link>
                                            
                                            <Link id="ex" to="#" className="dropdown-item notify-item">
                                                <div className="notify-icon bg-info"><i className="mdi mdi-martini"></i></div>
                                                <p className="notify-details">Your item is shipped<span className="text-muted">It is a long established fact that a reader will</span></p>
                                            </Link>
                                        
                                            </Scrollbars>
                                            <Link id="ex" to="#" className="dropdown-item text-center text-primary">
                                                View all <i className="fi-arrow-right"></i>
                                            </Link>
                                        </DropdownItem>
                                        </DropdownMenu>                                
                                    </Dropdown>   
                                </li>
                                <li className="menu-item list-inline-item">
                                    <Link to="#"  className="navbar-toggle nav-link">
                                        <div className="lines">
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                        </div>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="clearfix"></div>
                    </div>
                </div>
            </header>
        );
    }
}

export default withRouter(topbar);