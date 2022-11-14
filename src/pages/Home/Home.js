import Hero from '../../components/hero/Hero'
import metamask from '../../assets/metamask.png'
import mbtoken from '../../assets/mbtoken.png'
import opensea from '../../assets/opensea.png'
import './home.scss'
import NftCard from '../../components/NftCard/NftCard'
import groupedImage from '../../assets/3d.png'

const Home = () => {
  return (
    <div className='home' >
     
      <section>
        <Hero/>
        <div className='logo__list' >
          <img src={mbtoken} alt="metamask-logo"/>
          <img src={metamask} alt="metamask-logo"/>
          <img src={opensea} alt="metamask-logo"/>
        </div>
      </section>
      <section>
        <h1>Inspiration for your next adventure</h1>
        <div className='card__container' >
            <NftCard/>
            <NftCard/>
            <NftCard/>
            <NftCard/>
            <NftCard/>
            <NftCard/>
            <NftCard/>
            <NftCard/>
        </div>
      </section>
      <section className='maybe__nft' >
        <div className='maybe__nft-one' >
          <h2>Metabnb NFTs</h2>
          <p className='maybe__nft-text' >  Discover our NFT gift cards collection. Loyal <br/>
           customers gets amazing gift cards which are <br/>
            traded as NFTs. These NFTs gives our cutomer <br/>
             access to loads of our exclusive services.</p>
        </div>
        <div className='maybe__nft-two' >
          <img src={groupedImage} alt=""/>
        </div>
      </section>
    </div>
  )
}

export default Home