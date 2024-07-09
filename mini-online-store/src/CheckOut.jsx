import Header from "./Header"
import Footer from "./Footer"
import MasterCard from "./assets/mastercard.svg"
import Visa from "./assets/visa.svg"
import PayPal from "./assets/paypal.svg"
import Verve from "./assets/verve.svg"
import Button from "./Button"
import ShoppingCart from "./ShoppingCart"

function CheckOut(){
    return(
        <>
            <Header />
            <ShoppingCart />
            <div className="CustomerLogin">
                <p>Returning Customer? <a href="#">Click here to Login</a></p>
            </div>
            <div className="Checkout">
                <div className="BillingDetails">
                    <h6 className="heading">BILLING DETAILS</h6>
                    <form>
                        <div className="Name">
                            <div>
                                <label htmlFor="FirstName">First name </label>
                                <input type="text" id="FirstName" name="FirstName" required/><br />
                            </div>
                            <div>
                                <label htmlFor="LastName">Last name </label>
                                <input type="text" id="LastName" name="LastName" required/>
                            </div>
                        </div>           
                        <label htmlFor="State">State </label>
                        <input type="text" id="State" name="State"/>
                        <label htmlFor="Address">Address</label>
                        <input type="text" id="Address" name="Address"/>
                        <label htmlFor="City">City</label>
                        <input type="text" id="City" name="City"/>
                        <label htmlFor="PhoneNumber">Phone number</label>
                        <input type="tel" id="PhoneNumber" name="PhoneNumber"/>
                        <label htmlFor="Email">Email</label>
                        <input type="email" id="Email" name="Email"/>
                        <label htmlFor="OrderNotes">Order notes(optional)</label>
                        <textarea id="OrderNotes"></textarea> 
                    </form>
                    
                </div>

                <div className="Order">
                    <h6 className="heading">YOUR ORDER</h6>
                    <div className="Bills">
                        <p>Product</p>
                        <p>Subtotal</p>
                    </div>
                    <div className="Bills">
                        <p>The Golden Age 2 <span>x1</span></p>
                        <p>&#8358; 4,000</p>
                    </div>
                    <div className="Bills">
                        <p>Subtotal</p>
                        <p>&#8358; 4,000</p>
                    </div>
                    <div className="Bills">
                        <p>Total</p>
                        <p>&#8358; 6,000</p>
                    </div>
                    
                    <div className="PayStack">
                        <p>PayStack</p>
                        <p>Secured by <span>Paystack</span></p>
                    </div>
                    
                    <div className="PaymentMethod">
                        <ul>
                            <li><a href="#"></a><img src={MasterCard} alt="mastercard-logo" /></li>
                            <li><a href="#"></a><img src={Visa} alt="visa-logo" /></li>
                            <li><a href="#"></a><img src={PayPal} alt="paypal-logo" /></li>
                            <li><a href="#"></a><img src={Verve} alt="verve-logo" /></li>
                        </ul>
                    </div>
                    <p>Make payment using your debit and credit cards</p>
                    <Button ButtonName="PROCEED TO CHECK-OUT"/>
                    <p>Your personal data will be used to process your order,
                        support your experience throughout this website, and 
                        for other purposes described in our <a href="#">Privacy Policy</a>.</p>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default CheckOut