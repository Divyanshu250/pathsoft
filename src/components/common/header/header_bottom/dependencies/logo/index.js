const Logo=(props) =>{
    const logo=props.img
    return(
        <div className="logo">
            <img src={logo} alt="logo"/>
        </div>
    )
}

export default Logo;