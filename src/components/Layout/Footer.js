import React from 'react';

const footer = ( props ) => (
<footer className="footer">
<div className="container-fluid">
    <div className="row">
        <div className="col-12">
          {new Date().getFullYear() - 1} - {new Date().getFullYear()} © Admiria <span className="text-muted d-none d-sm-inline-block float-right">Crafted with <i className="mdi mdi-heart text-danger"></i> by Themesbrand</span>
        </div>
    </div>
</div>
</footer>
);

export default footer;
