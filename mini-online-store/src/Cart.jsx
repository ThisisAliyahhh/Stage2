import Header from "./Header"
import Footer from "./Footer"
import ShoppingCart from "./ShoppingCart"
import Golden from "./assets/golden2.png"
import Button from "./Button"
import Cancel from "./assets/cancel.svg"

function Cart(){
    return(
        <>
            <Header />
            <ShoppingCart />
            <div className="Cart">
                <div className="Products">
                    <div className="Product">
                        <h6 className="UserChioce">Product</h6>
                        <h6 className="Price">Price</h6>
                        <h6 className="Price">Quantity</h6>
                        <h6 className="Price">Sub-total</h6>

                        <div className="BookCover">
                            <img className="CancelButton" src={Cancel} alt="CancelButton" />
                            <img src={Golden} alt="book-cover" />
                            <span>The Golden Age 2</span>
                        </div>
                        <p className="Price">&#8358; 4,000</p>
                        <div class="CounterContainer">
                            <div class="MinusButton">-</div>
                            <div class="number">1</div>
                            <div class="PlusButton">+</div>
                        </div>
                        <p className="Price">&#8358; 4,000</p>
                    </div>
                    
                        
                    <div className="Button">
                        <div className="white">
                            <Button ButtonName="Continue Shopping" />
                        </div>
                        <Button ButtonName="Share Cart"/>
                    </div>
                </div>

                <div className="VeritalLine"></div>
                
                <div className="CartTotal">
                    <div className="CartHead">
                        <h6>Cart Totals</h6>
                    </div>
                    <div className="CartItems">
                        <div className="SubItems">
                            <p className="detail">Sub-total</p>
                            <p className="bill">&#8358; 4000</p>
                        </div>
                        <div className="SubItems">
                            <p className="detail">Delivery</p>
                            <p className="bill">&#8358; 2000</p>
                        </div>
                        <div className="SubItems">
                            <p className="detail">Total</p>
                            <p className="bill">&#8358; 6000</p>
                        </div>
                        <div className="Button">
                            <Button ButtonName="PROCEED TO CHECK-OUT"/>
                        </div>
                        
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Cart