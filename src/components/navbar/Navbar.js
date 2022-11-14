import './navbar.scss'
import logo from '../../assets/logo.png'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar' >
        <img src={logo} className='logo' alt="Logo"/>
        <ul>
            <NavLink className='li' to='/'>Home</NavLink>
            <NavLink className='li'>Place to stay</NavLink>
            <NavLink className='li' to='/nft' >Nfts</NavLink>
            <NavLink className='li'>Community</NavLink>
        </ul>
        <button>Connect Wallet</button>
    </div>
  )
}

export default Navbar