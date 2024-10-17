import Button from "../components/Button"

function CheckoutDetails(){
    return(
        <>
            <div className="CheckOutDetails">
                <h2 className="OrderHeading">Check-Out Details</h2>
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
        </>
    )
}

export default CheckoutDetails