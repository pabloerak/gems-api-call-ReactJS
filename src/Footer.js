import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <div className="footer">
            <center>
	            <hr width="95%" id="hr-status-bar" className="noprint" />
	            <div id="footer_tooltip_container" className="footer_tooltip_container noprint"></div>
	            <div className="footer__text">
		            <b id="mesure_time"></b>
		            GEMS Basic - General Examination Management System - default GEMS Basic 1.7.5.rc2 5471afbmc, © <a href="http://www.astech.ie" target="astech">ASTech</a> 2005-2021
	            </div>
            </center>
        </div>
    );
}

export default Footer;
