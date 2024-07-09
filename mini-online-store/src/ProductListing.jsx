import Header from "./Header"
import Footer from "./Footer"
import BookCategory from "./BookCategory"

function ProductListing(){
    return(
        <>
            <Header />
            <div className="background">
                <div className="greetings">
                    <h1>WELCOME TO BOOKTIQUE</h1>
                    <p>Buy your books at an affordable price ,and it will be delivered to you. </p>
                </div>
            </div>
            
            
            <BookCategory />
            <Footer />
        </>
    )
    
}

export default ProductListing