
import MasterCard from "../assets/mastercard.svg"
import Visa from "../assets/visa.svg"
import PayPal from "../assets/paypal.svg"
import Verve from "../assets/verve.svg"
import Button from "../components/Button"
import ShoppingCart from "../components/ShoppingCart"
import { Link } from "react-router-dom";

function CheckOut(){
    return(
        <>
            <div className="CustomerLogin">
                <ShoppingCart />
                <p>Returning Customer? <a href="#">Click here to Login</a></p>
            </div>
            <div className="Checkout">
                <div className="BillingDetails">
                    <h2 className="heading">BILLING DETAILS</h2>
                    <form>
                        <div className="Name">
                            <div className="First">
                                <label htmlFor="FirstName">First name <span>*</span></label>
                                <input type="text" id="FirstName" name="FirstName" required/><br />
                            </div>
                            <div className="Last">
                                <label htmlFor="LastName">Last name <span>*</span></label>
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
                    <h2 className="heading">YOUR ORDER</h2>
                    <div className="Bills">
                        <p class="head">Product</p>
                        <p class="head">Subtotal</p>
                    </div>
                    <div className="Bills">
                        <p className="golden">The Golden Age 2 <span>x1</span></p>
                        <p className="price">&#8358; 4,000</p>
                    </div>
                    <div className="Bills">
                        <p className="sub">Subtotal</p>
                        <p className="price">&#8358; 4,000</p>
                    </div>
                    <div className="Bills">
                        <p className="sub">Total</p>
                        <p className="price">&#8358; 6,000</p>
                    </div>
                    
                    <div className="PayStackNote">
                        <p className="PayStack">PayStack</p>
                        <p className="Secure"><span className="Secured">Secured by</span> <span className="PayStack">Paystack</span></p>
                    </div>
                    
                    <div className="PaymentMethod">
                        <ul>
                            <li><a href="#"></a><img src={MasterCard} alt="mastercard-logo" /></li>
                            <li><a href="#"></a><img src={Visa} alt="visa-logo" /></li>
                            <li><a href="#"></a><img src={PayPal} alt="paypal-logo" /></li>
                            <li><a href="#"></a><img src={Verve} alt="verve-logo" /></li>
                        </ul>
                    </div>
                    <p className="note">Make payment using your debit and credit cards</p>
                    <Link to="/checkoutdetails"><Button ButtonName="PROCEED TO CHECK-OUT"/></Link>
                    <p className="Policy">Your personal data will be used to process your order,
                        support your experience throughout this website, and 
                        for other purposes described in our <a href="#">Privacy Policy</a>.</p>
                </div>
            </div>
        </>
    )
}

export default CheckOut