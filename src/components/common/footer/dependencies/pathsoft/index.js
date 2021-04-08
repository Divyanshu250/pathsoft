const Logo =(props) =>{
    const logo= props.img
    return(
        <div className="logo1">
            <img src={logo} alt="woodo"/>
            <p>Our company has been developing high-quality and reliable software for corporate needs since 2008. We are renowned professionals of software development.</p>
            <ul className="social">
                
                    <a href="www.facebook.com">
                    <i class="fa fa-facebook-official fa-3x" aria-hidden="true"></i>
                    </a>
                
                
                    <a href="www.twitter.com">
                    <i class="fa fa-instagram fa-3x" aria-hidden="true"></i>
                    </a>

                    <a href="www.linkedin.com">
                    <i class="fa fa-linkedin-square fa-3x" aria-hidden="true"></i>
                    </a>
                
                
                    <a href="www.instagram.com">
                    <i class="fa fa-twitter-square fa-3x" aria-hidden="true"></i>
                    </a>
                
            </ul>
        </div>
    )
}

export default Logo;