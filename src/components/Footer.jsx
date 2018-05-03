import React from 'react';
import { Message } from 'semantic-ui-react';

import '../styles/Footer.css';

const Footer = () => (
	<div className="Footer">
		<Message compact>
			<Message.Header>Sources</Message.Header>
			<ul>
				<li>
					DataHaven analysis (2018) of US Census Bureau, American Community Survey 2016 5-year estimates and 2010 Decennial Census.
				</li>
				<li>
					Robert K. Nelson, LaDale Winling, Richard Marciano, Nathan Connolly, et al., <a href="https://dsl.richmond.edu/panorama/redlining/#loc=11/41.3030/-72.9225&opacity=0.8&city=new-haven-ct">“Mapping Inequality,”</a> American Panorama, ed. Robert K. Nelson and Edward L. Ayers, accessed March 7, 2018.
				</li>
			</ul>
			<Message.Header as="a" href="https://github.com/ct-data-haven/housing/blob/gh-pages/data/housing_data.csv">Download the data</Message.Header>
		</Message>
	</div>
);

export default Footer;
