const DropDown=(props) =>{
    const items= props.dropdownItems
    return(
        items?
        <div className="dropdown">
            <ul>
                {items.map((item)=>{
                return(
                    <li><a href={item.url}>{item.name}
                    </a></li>
                )
                })}
            </ul>
        </div>:null
    )
}

export default DropDown;