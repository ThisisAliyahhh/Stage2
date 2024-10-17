import ShoppingCart from "../components/ShoppingCart"
import Golden from "../assets/golden2.png"
import Button from "../components/Button"
import Cancel from "../assets/cancel.svg"
import { Link } from "react-router-dom";

function Cart(){
    return(
        <>
            <div className="Carts">
                <ShoppingCart />
                <div className="Cart">
                    <div className="Products">
                        <div className="ProductHead">
                            <ul>
                                <li className="UserChioce">Product</li>
                                <li className="Price">Price</li>
                                <li className="Quantity">Quantity</li>
                                <li className="Price">Sub-total</li>
                            </ul>
                        </div>

                        <div className="Product">
                            <ul>
                                <li className="UserBook">
                                    <div className="SelectBook">
                                        <div className="CancelButton">
                                            <img src={Cancel} alt="Cancel button" />
                                        </div>
                                        
                                        <div className="BookCover">
                                            <img src={Golden} alt="book-cover" />
                                        </div>
                                    </div>
                                    
                                    
                                    <span>The Golden Age 2</span>
                                </li>
                                <li className="Price">&#8358; 4,000</li>
                                <li className="Quantity">
                                    <div className="CounterContainer">
                                        <div class="MinusButton">-</div>
                                        <div class="number">1</div>
                                        <div class="PlusButton">+</div>
                                    </div>
                                    
                                </li>
                                <li className="Price">&#8358; 4,000</li>
                            </ul>
                        </div>
                        
                        
                            
                        <div className="Button">
                            <div className="white">
                                <Link to="/home"><Button ButtonName="Continue Shopping" /></Link>
                            </div>
                            <Button ButtonName="Share Cart"/>
                        </div>
                    </div>
                    
                    <div className="CartTotal">
                        <div className="CartHead">
                            <p>Cart Totals</p>
                        </div>
                        <div className="CartItems">
                            <ul className="SubItems">
                                <li className="detail">Sub-total</li>
                                <li className="bill">&#8358; 4000</li>
                            </ul>
                            <ul className="SubItems">
                                <li className="detail">Delivery</li>
                                <li className="bill">&#8358; 2000</li>
                            </ul>
                            <ul className="SubItems">
                                <li className="detail">Total</li>
                                <li className="bill">&#8358; 6000</li>
                            </ul>
                        </div>
                        <div className="Button">
                            <Link to="/checkout"><Button ButtonName="PROCEED TO CHECK-OUT"/></Link>
                        </div>
                            
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cart