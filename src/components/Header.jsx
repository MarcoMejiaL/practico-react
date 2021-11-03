import React from 'react'

const Header = ()=>{
    return(
        
        <nav className="navegarion_desktop">
            <img src="./assets/img/icons/icon_menu.svg" alt="icono" className="menuicono" />
            <div className="navbar-left">
                <img src="./assets/img/logos/logo_yard_sale.svg" alt="" className="logonav" />
                <ul>
                    <li>
                        <a href="">All</a>
                    </li>
                    <li>
                        <a href="">Clothes</a>
                    </li>
                    <li>
                        <a href="">Electronics</a>
                    </li>
                    <li>
                        <a href="">Furnitures</a>
                    </li>
                    <li>
                        <a href="">Toys</a>
                    </li>
                    <li>
                        <a href="">Others</a>
                    </li>
                </ul>
            </div>
            <div className="navbar-right">
                <ul>
                    <li className="navbar__email">youraccount@example.com</li>
                    <li className="navbar__shopinggard">
                        <img src="./assets/img/icons/icon_shopping_cart.svg" alt="" />
                        <div>2</div>
                    </li>
                </ul>

            </div>
        </nav>
    );
}

export default  Header;