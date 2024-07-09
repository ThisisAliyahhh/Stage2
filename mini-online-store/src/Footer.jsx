import FaceBook from "./assets/facebook.svg"
import Insta from "./assets/instagram.svg"
import X from "./assets/x.svg"
import Mail from "./assets/mail.svg"
import Button from "./Button"

function Footer(){
    return(
        <footer>
            <div className="About">
                <div className="AboutBooktiqueSection">
                    <p className="title">About Booktique</p>
                    <p className="Content">
                    Booktique Bookstore was came to live from our small reading table to your 
                    screens, Booktique was born from a love of books shared between my mom and me.
                    Together we’ve curated a collection that celebrates stories and  knowledge,
                    hoping to inspire readers like you.   
                    </p>
                </div>

                <div className="SocialSection">
                    <ul>
                        <li><a href="#"><img src={FaceBook} alt="facebook-logo" /></a></li>
                        <li><a href="#"><img src={X} alt="x-logo" /></a></li>
                        <li><a href="#"><img src={Insta} alt="instagram-logo" /></a></li>
                        <li><a href="#"><img src={Mail} alt="mail-logo" /></a></li>
                    </ul>
                </div>
            </div>

            <div className="Join">
                <div className="JoinNestSection">
                    <p className="title">Join Booktique Nest </p>
                    <p className="Content">
                        Join Booktique nest,a platform where we share recommdations,
                        bookish new and discount Codes
                    </p>
                </div>
                
                <div className="ButtonSection">
                    <Button ButtonName="Join Nest"/>
                </div>
            </div>

            <div className="Contact">
                <div className="LocationSection">
                    <p className="title">Our Location</p>
                    <p className="Content">Akwa Ibom Uyo,31 Nepa line</p>
                </div>
                <div className="ContactSection">
                    <p className="title">Contact Us</p>
                    <p className="Content">+2348063687844 <br />
                    +2348062550514
                    </p>
                </div>
            </div>
        </footer>
        
    )
}
export default Footer