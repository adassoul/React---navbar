import './style.css'
import {
  Navbar,
  NavbarInner,
  NavbarLeft,
  NavbarRight,
  NavbarExtended,
  NavbarLink,
  NavbarExtendedLink,
  NavImg,
  ExtendMenuButton
} from "./Styles/Navbar.style";

import LogoImg from "./Assets/NavbarImg.png";

import {useState} from 'react'

export default function App() {
  const [extendNavbar, setExtendNavbar] = useState(false)

  return (
      <Navbar extendNavbar={extendNavbar}>
        <NavbarInner>
          <NavbarLeft>
            <NavbarLink to="/">Home</NavbarLink>
            <NavbarLink to="/products">Products</NavbarLink>
            <NavbarLink to="/contact">Contact Us</NavbarLink>
            <NavbarLink to="/about">About Us</NavbarLink>
            <ExtendMenuButton 
              onClick={() => {
                setExtendNavbar(curr => !curr)
              }}
            >
              {
                extendNavbar 
                ? <>&#10005;</> 
                : <>&#8801;</>
              }
            </ExtendMenuButton>
          </NavbarLeft>
          <NavbarRight>
            <NavImg src={LogoImg}/>
          </NavbarRight>
        </NavbarInner>
        {extendNavbar && (
          <NavbarExtended>
            <NavbarExtendedLink to="/">Home</NavbarExtendedLink>
            <NavbarExtendedLink to="/products">Products</NavbarExtendedLink>
            <NavbarExtendedLink to="/contact">Contact Us</NavbarExtendedLink>
            <NavbarExtendedLink to="/about">About Us</NavbarExtendedLink>
          </NavbarExtended>
        )}
      </Navbar>
  );
}
