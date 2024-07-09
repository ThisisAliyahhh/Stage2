import Book from "./Books"
// fiction books
import golden1 from "./assets/golden1.png"
import golden2 from "./assets/golden2.png"
import magic from "./assets/magic.png"
import goddess from "./assets/goddess.png"
import ruskin from "./assets/ruskinbond.png"
import living from "./assets/living.png"
import earth from "./assets/theearth.png"
import fire from "./assets/firedance.png"
// business books
import habitofsuccess from "./assets/habitofsuccess.png"
import influence from "./assets/influence.png"
import actlikesuccess from "./assets/actlikesuccess.png"
import keystosuccess from "./assets/keystosuccess.png"
import successprinciple from "./assets/successprinciple.png"
import schoolofmoney from "./assets/schoolofmoney.png"
import startup from "./assets/startup.png"
import atomichabits from "./assets/atomichabits.png"
// bestselling books
import thinkandgrow from "./assets/thinkandgrow.png"
import zerotoone from "./assets/zerotoone.png"
import fastlane from "./assets/fastlane.png"
import gonegirl from "./assets/gonegirl.png"


function BookCategory(){
    return(
        <>
        <div className="BookOptions">
            <select id="bookcategory">
                <option value="categories">Categories</option>
                <option value="fiction">FICTION</option>
                <option value="business">BUSINESS</option>
                <option value="bestselling">BESTSELLING</option>
            </select>
            <div className="books">
                <h6>FICTION</h6>
                <div className="fiction">
                    <Book src={golden1} title="The Golden Age 1" price="4,000" />
                    <Book src={golden2} title="The Golden Age 2" price="5,000" />
                    <Book src={magic} title="Books of Magic" price="10,000" />
                    <Book src={goddess} title="In the hands of the Goddess" price="4,000" />
                    <Book src={ruskin} title="Ruskin Bond" price="4,000" />
                    <Book src={living} title="Living Forward" price="4,000" />
                    <Book src={earth} title="The Earth Family Smith" price="4,000" />
                    <Book src={fire} title="Fire Dance" price="4,000" />
                </div>
                    
                <h6>BUSINESS</h6>
                <div className="business">
                    <Book src={habitofsuccess} title="Habit of Success" price="4,000" />
                    <Book src={influence} title="How to win Friends" price="9,000" />
                    <Book src={actlikesuccess} title="Act like a Success" price="6,000" />
                    <Book src={keystosuccess} title="The 7 Keys to Success" price="10,000" />
                    <Book src={successprinciple} title="The Success Principle" price="6,000" />
                    <Book src={schoolofmoney} title="The School of Money" price="14,000" />
                    <Book src={startup} title="The Start Up Way" price="8,000" />
                    <Book src={atomichabits} title="Atomic Habits" price="8,000" />
                </div>
                
                <h6>BESTSELLING</h6>
                <div className="bestselling">
                    <Book src={thinkandgrow} title="Think and Grow Rich" price="12,000" />
                    <Book src={zerotoone} title="Zero to One" price="12,000" />
                    <Book src={fastlane} title="The Millionaire Fast Lane" price="10,000" />
                    <Book src={gonegirl} title="Gone Girl" price="8,000" />
                </div>
            </div>
        </div>
        
        
    </>
    )
    
}

export default BookCategory