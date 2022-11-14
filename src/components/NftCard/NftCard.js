import "./nftcard.scss";
import one from "../../assets/one.png";
import { AiFillStar } from "react-icons/ai";

const NftCard = () => {
  return (
    <div className="nftcard">
      <img className="card__img" src={one} alt="" />
      <div className="card__content">
        <div className="card__content-one">
          <p>Desert king</p>
          <p>2345km away</p>
        </div>
        <div className="card__content-two">
          <p className="per__night">1MBT per night</p>
          <p>available for 2weeks stay</p>
        </div>
      </div>
      <div className="rating">
        <AiFillStar  className="icon"/>
        <AiFillStar className="icon"/>
        <AiFillStar className="icon"/>
        <AiFillStar className="icon"/>
        <AiFillStar className="icon"/>
      </div>
    </div>
  );
};

export default NftCard;
