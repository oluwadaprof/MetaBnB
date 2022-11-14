import Hero from '../../components/hero/Hero'
import Navbar from '../../components/navbar/Navbar'
import metamask from '../../assets/metamask.png'
import mbtoken from '../../assets/mbtoken.png'
import opensea from '../../assets/opensea.png'
import './home.scss'

const Home = () => {
  return (
    <div className='home' >
      <nav>
        <Navbar/>
      </nav>
      <section>
        <Hero/>
        <div className='logo__list' >
          <img src={mbtoken} alt="metamask-logo"/>
          <img src={metamask} alt="metamask-logo"/>
          <img src={opensea} alt="metamask-logo"/>
        </div>
      </section>
    </div>
  )
}

export default Home