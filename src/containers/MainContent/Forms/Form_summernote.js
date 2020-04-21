import React , {Component } from 'react';
import AUX from '../../../hoc/Aux_';
import { Link } from 'react-router-dom';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';


class Form_summernote extends Component{
 
render(){
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
                                        <li className="breadcrumb-item active">Summernote</li>
                                    </ol>
                                </div>
                                <h4 className="page-title">Summernote</h4>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12">
                            <div className="card m-b-20">
                                <div className="card-body">

                                    <h4 className="mt-0 header-title">Examples</h4>
                                    <p className="text-muted m-b-30 font-14">Super simple wysiwyg editor on bootstrap</p>
                                     <Editor
                                        toolbarClassName="toolbarClassName"
                                        wrapperClassName="wrapperClassName"
                                        editorClassName="editorClassName" />

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

export default Form_summernote;   