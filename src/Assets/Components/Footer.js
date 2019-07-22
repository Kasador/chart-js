import React from 'react';
import FooterArt from '../Images/footer.png';

function Footer() {
    // get current year for footer
    const getCurrentYear = () => {
        let getDate = new Date();
        let currentYear = getDate.getFullYear();
        return currentYear;
    }

    const styleMyName = {
        color: 'whitesmoke'
    }

    return (
        <div className="Footer">
            <img src={FooterArt} alt="footer art" />
            <footer>
                <span><i class="fas fa-angle-left"></i> Made With <i class="fas fa-heart"></i> &#38; <i class="fas fa-coffee"></i> /<i class="fas fa-angle-right"></i></span>
                <span><a href="https://hunterstevenshaw.com/" target="_blank" rel="noopener noreferrer" style={styleMyName}>H. Steven Shaw</a> | &copy; {getCurrentYear()}</span>
            </footer>
        </div>
    );
}

export default Footer;