import DropDown from './../dropdown'

const Navbar=(props) =>{
    const navItems= props.navData
    return(
        navItems?
        <nav className="nav-top">
            <ul>
                {navItems.map((item) =>{
                    return (<li><a href={item.url}>
                        {item.name}
                        {item.dropdown? < DropDown dropdownItems= {item.dropdown}/>:null}
                        {item.dropdown? < i class="fa fa-caret-down" aria-hidden="true"></i>:null}
                        </a></li>)
                })}
                
            </ul>
        </nav>:null
    )   
}

export default Navbar;