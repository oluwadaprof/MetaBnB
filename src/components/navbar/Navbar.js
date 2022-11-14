import './navbar.scss'
import logo from '../../assets/logo.png'

const Navbar = () => {
  return (
    <div className='navbar' >
        <img src={logo} className='logo' alt="Logo"/>
        <ul>
            <li>Home</li>
            <li>Place to stay</li>
            <li>Nfts</li>
            <li>Community</li>
        </ul>
        <button>Connect Wallet</button>
    </div>
  )
}

export default Navbar