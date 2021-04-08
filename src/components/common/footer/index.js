import logo from './../../../assests/logo/logo-white.png';
import Logo from './../footer/dependencies/pathsoft';
import Menu from './../footer/dependencies/menu1';
import Menu_ from './../footer/dependencies/menu2';
import Contact from './../footer/dependencies/contacts'
import './footer.css'


const Footer =(props) =>{
    return(
        <div className="footer">
            <div className="container">
                <Logo img={logo}/>
                <Menu/>
                <Menu_/>
                <Contact/>
            </div>
        </div>
    )
}

export default Footer;