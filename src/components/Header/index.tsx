import "./styles.css";
import homeSvg from "../../assets/Home.svg";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <nav className="container">
        <div className="drr-navlink">
          <NavLink to="/home" className={({isActive}) => isActive ? "drr-navlink menu-active" : "drr-navlink" }>
            Início</NavLink> 
          <NavLink to="/products" className={({isActive}) => isActive ? "drr-navlink menu-active" : "drr-navlink"}> 
          Produtos</NavLink>
          <NavLink to="/about" className={({isActive}) => isActive ? "drr-navlink menu-active" : "drr-navlink"}>
            Sobre nós</NavLink>
        </div>
        <div>
          <Link to="/home">
            <img src={homeSvg} alt="Home" />
          </Link>
        </div>
      </nav>
    </header>
  );
}
