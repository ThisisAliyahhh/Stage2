import FaceBook from "../assets/facebook.svg"
import Insta from "../assets/instagram.svg"
import X from "../assets/x.svg"
import Mail from "../assets/mail.svg"
import Button from "./Button"

function Footer(){
    return(
        <footer>
            <div className="About">
                <div className="AboutBooktiqueSection">
                    <h4 className="title">About Booktique</h4>
                    <p className="Content">
                    Booktique Bookstore was came to live from our small reading table to your 
                    screens, Booktique was born from a love of books shared between my mom and me.
                    Together we’ve curated a collection that celebrates stories and  knowledge,
                    hoping to inspire readers like you.   
                    </p>
                </div>

                <div className="SocialSection">
                    <ul>
                        <li><a href="#">
                            <div className="SocialIcon">
                                <img src={FaceBook} alt="facebook-logo" />
                            </div>
                        </a></li>

                        <li><a href="#">
                            <div className="SocialIcon">
                                <img src={X} alt="x-logo" />
                            </div>
                        </a></li>

                        <li><a href="#">
                            <div className="SocialIcon">
                                <img src={Insta} alt="instagram-logo" />
                            </div>
                        </a></li>

                        <li><a href="#">
                            <div className="SocialIcon">
                            <img src={Mail} alt="mail-logo" />
                            </div>
                        </a></li>
                    </ul>
                </div>
            </div>

            <div className="Join">
                <div className="JoinNestSection">
                    <h4 className="title">Join Booktique Nest </h4>
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
                    <h4 className="title">Our Location</h4>
                    <p className="Content">Akwa Ibom Uyo, <br /> 31 Nepa line</p>
                </div>
                <div className="ContactSection">
                    <h4 className="title">Contact Us</h4>
                    <p className="Content">+2348063687844 <br />
                    +2348062550514
                    </p>
                </div>
            </div>
        </footer>
        
    )
}
export default Footer