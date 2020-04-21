import React , {Component } from 'react';
import AUX from '../../../hoc/Aux_';
import { Link } from 'react-router-dom';
import WizardFormFirstPage from '../Subpages/WizardFormFirstPage';
import WizardFormSecondPage from '../Subpages/WizardFormSecondPage';
import WizardFormThirdPage from '../Subpages/WizardFormThirdPage';
import WizardFormForthPage from '../Subpages/WizardFormForthPage';

class Form_wizard extends Component{

    constructor(props) {
        super(props)
        this.nextPage = this.nextPage.bind(this)
        this.previousPage = this.previousPage.bind(this)
        this.state = {
          page: 1
        }
      }
      nextPage() {
        this.setState({ page: this.state.page + 1 })
      }
    
      previousPage() {
        this.setState({ page: this.state.page - 1 })
      }
 
render(){
    
    const { onSubmit } = this.props;
    const { page } = this.state;
    return(
           <AUX>
		    <div className="wrapper">
            <div className="container-fluid">

                <div className="row">
                    <div className="col-sm-12">
                        <div className="page-title-box">
                            <div className="btn-group pull-right">
                                <ol className="breadcrumb hide-phone p-0 m-0">
                                    <li className="breadcrumb-item"><Link to="#">Forms</Link></li>
                                    <li className="breadcrumb-item active">Wizard</li>
                                </ol>
                            </div>
                            <h4 className="page-title">Wizard</h4>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-sm-12">
                        <div className="card m-b-20">
                            <div className="card-body">

                                <h4 className="mt-0 header-title">Jquery Steps Wizard</h4>
                                <p className="text-muted m-b-30 font-14">A powerful jQuery wizard plugin that
                                    supports accessibility and HTML5</p>


                                    <div>
                                        {page === 1 && <WizardFormFirstPage onSubmit={this.nextPage} />}
                                        {page === 2 && (
                                        <WizardFormSecondPage
                                            previousPage={this.previousPage}
                                            onSubmit={this.nextPage}
                                        />
                                        )}
                                        {page === 3 && (
                                        <WizardFormThirdPage
                                            previousPage={this.previousPage}
                                            onSubmit={this.nextPage}
                                        />
                                        )}
                                        {page === 4 && (
                                        <WizardFormForthPage
                                            previousPage={this.previousPage}
                                            onSubmit={onSubmit}
                                        />
                                        )}
                                    </div>

                               </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
		    
           </AUX>
        );
    }
}

export default Form_wizard;   