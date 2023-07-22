function Footer(){
    return(
        <div className="footer">
            <footer>
            <div class="footer-line">
                <p class="logo">MyPetSpotlight</p>

                <div class="social-media">
                <p>Get in touch</p>
                <ul>
                    <li class="list-item">
                    <a href=""><i class="fa-brands fa-facebook fa-2xl"></i></a>
                    </li>
                    <li class="list-item">
                    <a href=""><i class="fa-brands fa-twitter fa-2xl"></i></a>
                    </li>
                    <li class="list-item">
                    <a href=""><i class="fa-brands fa-tiktok fa-2xl"></i></a>
                    </li>
                    <li class="list-item">
                    <a href=""><i class="fa-brands fa-instagram fa-2xl"></i></a>
                    </li>
                    <li class="list-item">
                    <a href=""><i class="fa-brands fa-github fa-2xl"></i></a>
                    </li>
                </ul>
                </div>
            </div>

            <div class="copyright">
                {/* <p> Copyright &copy; 2023 <span style="color: aqua;">MyPetSpotlight</span>. All Rights Reserved</p> */}
            </div>
            </footer>
        </div>
    )
}
export default Footer;