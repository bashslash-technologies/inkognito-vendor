import React from 'react';

const footer = ( props ) => (
	<footer className="footer">
		<div className="container-fluid">
			<div className="row">
				<div className="col-12">
					{new Date().getFullYear()} © BackSlash Technologies}
				</div>
			</div>
		</div>
	</footer>
);

export default footer;
