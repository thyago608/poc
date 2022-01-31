import logo from "../../assets/images/logo.png";
import "./styles.scss";

export function Header(){
    return(
        <header id="header">
            <img src={logo} alt="logo" />
            <nav>
                <a href="/">Home</a>
                <a href="#">Products</a>
                <a href="/contacts">Contacts</a>
                <a href="#">FAQ</a>
            </nav>
        </header>
    );
}