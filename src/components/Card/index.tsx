import { NavLink } from 'react-router-dom';
import './styles.css';

export default function Card() {

    return(
        <div className='card-container'>
            <NavLink to="/products/computers" className={({isActive}) => isActive ? "card-title menu-active" : "card-title"}>
                <p>Computadores</p>
            </NavLink>
            <NavLink to="/products/eletronics" className={({isActive}) => isActive ? "card-title menu-active" : "card-title"}>
                <p>Eletrônicos</p>
            </NavLink>
            <NavLink to="/products/books" className={({isActive}) => isActive ? "card-title menu-active" : "card-title"}>
                <p>Livros</p> 
            </NavLink>
        </div>
    );
}