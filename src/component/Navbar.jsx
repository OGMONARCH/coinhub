import { useState, useEffect }from 'react';
import { FaBitcoin } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";
import "../App.css";
import { RxHamburgerMenu } from "react-icons/rx";
import { RiCloseFill } from "react-icons/ri";


const Navbar = () => {
  const [showMenu, setShowMenu] = useState(true)


  const toggleMenu = () =>{
    setShowMenu(!showMenu);
    
  }

  return (
    <nav className='navbar Container'>
        <div className='logo'>
        <FaBitcoin size={30} color='white' />
        <h1 className='logo-text'>Coins</h1>
        </div>

        <menu>
            <ul className="nav-links" id={showMenu? "nav-links-mobile" : "nav-links-mobile-hide"}>
                <li>About <FaLongArrowAltRight  size={10}/></li>
                <li>Contact Us <FaLongArrowAltRight size={10} /></li>
            </ul>
        </menu>
        <div className='menu-icons' onClick={toggleMenu}>
          {
            showMenu ?  <RiCloseFill color='white' size={30} /> : <RxHamburgerMenu size={30} color='white' />
  
          }
        </div>
    </nav>
  )
}

export default Navbar