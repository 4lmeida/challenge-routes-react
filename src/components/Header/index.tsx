import "./styles.css";
import homeSvg from "../../assets/Home.svg";

export default function Header() {
  return (
    <header>
      <nav className="container">
        <div className="drr-navlink">
          <p>Início</p>
          <p>Produtos</p>
          <p>Sobre nós</p>
        </div>
        <div>
          <img src={homeSvg} alt="Home" />
        </div>
      </nav>
    </header>
  );
}
