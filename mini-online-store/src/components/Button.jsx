

function Button(props){
    return(
        <>
            <a href={props.href}><button>{props.ButtonName}</button></a>
        </>
        
    )
    
}
Button.defaultProps = {
    href: "#",
    ButtonName: "Click me",
}

export default Button