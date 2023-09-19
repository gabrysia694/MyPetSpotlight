function Footer(){
    return(
        <div className="footer">
            <footer>
            <div className="footer-line">
                <p className="logo">MyPetSpotlight</p>

                <div className="social-media">
                <p>Get in touch</p>
                <ul>
                    <li className="list-item">
                    <a href=""><i className="fa-brands fa-facebook fa-2xl"></i></a>
                    </li>
                    <li className="list-item">
                    <a href=""><i className="fa-brands fa-twitter fa-2xl"></i></a>
                    </li>
                    <li className="list-item">
                    <a href=""><i className="fa-brands fa-tiktok fa-2xl"></i></a>
                    </li>
                    <li className="list-item">
                    <a href=""><i className="fa-brands fa-instagram fa-2xl"></i></a>
                    </li>
                    <li className="list-item">
                    <a href=""><i className="fa-brands fa-github fa-2xl"></i></a>
                    </li>
                </ul>
                </div>
            </div>

            <div className="copyright">
                <p> Copyright &copy; 2023 <span style={{color:"aqua"}}>MyPetSpotlight</span>. All Rights Reserved</p>
            </div>
            </footer>
        </div>
    )
}
export default Footer;