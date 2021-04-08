import logo1 from './../../../../assests/logo/logo12.png';
import Logo from './../header_bottom/dependencies/logo';
import Navbar from './../header_bottom/dependencies/navbar';
import navlist from './../header_bottom/dependencies/mock/nav.json';
import './header.css';



const Headerbottom = (props) =>{
    return(
        <div className="Header_bottom">
            <div className="container">
                <Logo img={logo1}/>
                <Navbar navData={navlist}/>
            </div>
        </div>
    )
}

export default Headerbottom;