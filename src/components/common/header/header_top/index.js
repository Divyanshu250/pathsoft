import './header.css'

const Headertop =(props) =>{
    return(
        <div className="headertop">
            <div className="container">
                <div className="headerinfo">
                    <ul className="leftinfo">
                        <li>
                            <a href="mailto:jadondivyanshu765@gmail.com">
                             <i class="fa fa-envelope" aria-hidden="true"></i>
                            <span>jadondivyanshu765@gmail.com</span>
                            </a>
                        </li>
                        <li>
                            <a href="tel:8750109414">
                            <i class="fa fa-phone" aria-hidden="true"></i>   
                            <span>8750109414</span></a>
                        </li>
                    </ul>
                    <ul className="rightinfo">
                        <li>
                            <a href="www.facebook.com" target="_blank">
                            <i class="fa fa-facebook" aria-hidden="true"></i>
                            </a>
                        </li>
                        <li>
                            <a href="www.instagram.com" target="_blank">
                            <i class="fa fa-instagram" aria-hidden="true"></i>
                            </a>
                        </li>
                        <li>
                            <a href="www.linkedin.com">
                            <i class="fa fa-linkedin" aria-hidden="true"></i>
                            </a>
                        </li>
                        <li>
                            <a href="www.twitter.com">
                            <i class="fa fa-twitter" aria-hidden="true"></i>
                            </a>
                        </li>
                        <li >
                            <a href="">
                        <i class="fa fa-volume-control-phone" aria-hidden="true"></i>
                        <span>Callback</span></a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}


export default Headertop;