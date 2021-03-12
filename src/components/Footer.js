import React from 'react';
import '../index.css';

const Footer = ({pie}) => {
    return ( 
        <footer className="main-footer">
            <div className="text-white text-center pt-5 texto-footer">
                <h4>{pie}</h4>
            </div>
        </footer>
        
     )
}
 
export default Footer;