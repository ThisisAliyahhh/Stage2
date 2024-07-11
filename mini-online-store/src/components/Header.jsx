import openBook from "../assets/open-book.svg" 
import Cart from "../assets/cart.svg" 
import { Link } from "react-router-dom";

function Header(){
    return(
        <header>
            <div className="logo">
                <span>Book</span>
                <img src={openBook} alt="open-book" width="30px" height="30px"/>
                <span>tique</span>
            </div>
            <div className="HeaderLink">
                <ul>
                    <li className="Home"><a href="/home">Home </a></li>
                    <li>
                        <input type="text" placeholder="Search"/>
                    </li>
                    <li className="CartButton">
                        <button>
                        <a href="/cart">
                            Cart <img src={Cart} alt="cart-logo" height="15px"/>
                        </a>
                        </button>
                    </li>
                    
                </ul>
            </div>  
    </header>
    )
    
}
export default Header;