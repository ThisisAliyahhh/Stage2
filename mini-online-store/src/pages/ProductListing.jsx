import BookCategory from "../components/BookCategory"

function ProductListing(){
    return(
        <>  
            <div className="background">
                    <div className="greetings">
                        <h1>Welcome to <br /> Booktique</h1>
                        <p>Buy your books at an affordable price,and it will be delivered to you. </p>
                    </div>
            </div>
            
            
            <BookCategory />
        </>
    )
    
}

export default ProductListing