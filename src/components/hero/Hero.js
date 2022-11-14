import "./hero.scss";
import heroImage from '../../assets/hero image.png'

const Hero = () => {
  return (
    <div className="hero">
      <section className="first__hero">
        <h1>
          Rent a <span>Place</span> away from
          <br />
          <span>Home</span> in the <span>Metaverse</span>{" "}
        </h1>
        <p>
          we provide you access to luxury and affordable houses <br />
          in the metaverse, get a chance to turn your <br />
          imagination to reality at your comfort zone.
        </p>
        <div className="input__container" >
            <input type="" name="" placeholder="Search for location"  value=""/>
            <button type="" className="search__btn" >Search</button>
        </div>
      </section>
      <section className="second__hero">
        <img src={heroImage} alt=""/>
      </section>
    </div>
  );
};

export default Hero;
