import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavImg = styled.img`
  max-width: 180px;
  height: auto;
  margin: 10px;
`;

export const Navbar = styled.div`
  height: 80px;
  width: 100%;
  background: black;
  display: flex;
  flex-direction: column;

  @media (max-width: 700px){
    height: ${
      (props)=> {
        return props.extendNavbar ? "100vh" : "80px"
      }
    };
  }
`;

export const NavbarLeft = styled.div`
  flex: 70%;
  display: flex;
  align-items: center;
  padding-left: 5%;
`;

export const NavbarRight = styled.div`
  flex: 30%;
  display: flex;
`;

export const NavbarInner = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
`;

export const NavbarExtended = styled.div``;

export const ExtendMenuButton = styled.button`
  width: 50px;
  height: 100px;
  background: none;
  border: none;
  color: white;
  font-size: 45px;
  cursor: pointer;

  @media (min-width: 700px){
    display: none;
  }
`;

export const NavbarLink = styled(Link)`
  color: white;
  text-decoration: none;
  margin: 10px;
  text-align: center;
  @media (max-width: 700px){
    display: none;
  }
`;

export const NavbarExtendedLink = styled.div`
  color: white;
  text-decoration: none;
  margin: 10px;
  text-align: center;

  @media (min-width: 700px){
    display: none;
  }
`;

