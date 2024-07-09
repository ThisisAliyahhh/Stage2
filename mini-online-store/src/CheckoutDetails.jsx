import Header from "./Header"
import Footer from "./Footer"
import Button from "./Button"

function CheckoutDetails(){
    return(
        <>
            <Header />
            <div>
                <h6 className="heading">Check-Out Details</h6>
                <div className="OrderDetails">
                    <p>Order number: <span>89841</span></p>
                    <p>Date: <span>July 7, 2024</span></p>
                    <p>Total: <span>6,000</span></p>
                    <p>Payment Method: <span>PayStack</span></p>
                    <p>Thank you for  your order, please click the button below to pay with paystack</p>
                    <Button ButtonName="PAY NOW" /> <br />
                    <Button ButtonName="CANCEL ORDER" />
                </div>
                
            </div>
            <Footer />
        </>
    )
}

export default CheckoutDetails