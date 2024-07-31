import "./styles/Socialicon.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faEnvelope} from "@fortawesome/free-solid-svg-icons"
import { faFacebook, faSquareXTwitter, faPinterest, faLinkedin} from "@fortawesome/free-brands-svg-icons";
const SocialIcons=()=>{
    return(
        <div className="social_icons_ab">
              <FontAwesomeIcon icon={faEnvelope} className="fa-2x custom-color-hover"/>
              <FontAwesomeIcon icon={faFacebook} className="fa-2x custom-color-hover"/>
              <FontAwesomeIcon icon={faSquareXTwitter} className="fa-2x custom-color-hover"/>
              <FontAwesomeIcon icon={faPinterest} className="fa-2x custom-color-hover"/>
              <FontAwesomeIcon icon={faLinkedin} className="fa-2x custom-color-hover"/>
            </div>
    );
}
export default SocialIcons;