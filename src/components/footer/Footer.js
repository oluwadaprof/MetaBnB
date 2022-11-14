import "./footer.scss";
import logowhite from "../../assets/metabnb.png";
import { GrFacebookOption } from "react-icons/gr";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";


const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__one">
        <img src={logowhite} alt="" />
        <div className="footer__icons" >
            <GrFacebookOption className="footer__icon"/>
            <AiOutlineInstagram className="footer__icon"/>
            <AiOutlineTwitter className="footer__icon"/>
        </div>
        <p>	&#x24B8; 2022 Metabnb</p>
      </div>
      <div className="footer__two">
        <p>Community</p>
        <ul>
            <li>NFT</li>
            <li>Tokens</li>
            <li>Landlords</li>
            <li>Discord</li>
        </ul>
      </div>
      <div className="footer__three">
        <p>Places</p>
        <ul>
            <li>Castle</li>
            <li>Farms</li>
            <li>Beach</li>
            <li>Learn more</li>
        </ul>
      </div>
      <div className="footer__four">
        <p>About us</p>
        <ul>
            <li>Road Maps</li>
            <li>Creators</li>
            <li>Career</li>
            <li>Contact Us</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
