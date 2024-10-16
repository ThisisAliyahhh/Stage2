import Button from "./Button"

function Book(props){
    return(
        <>
        <div className="book">
            <div className="book-img">
                <img src={props.src} alt="book-cover" className="book-cover" />
            </div>
            <p className="book-title">{props.title}</p>
            <p className="book-price">&#8358; {props.price}</p>
            <Button className="ToCart" href="#" ButtonName="Add to Cart"/>
        </div>
        </>
    )
}
export default Book