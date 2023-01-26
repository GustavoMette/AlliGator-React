import styles from "../styles/navbar.module.css";

export default function Navbar() {
    return (
        <div>
<navbar>
<img className="logo" src="image/Logo.png"></img>
<div className="menu-btn">
    <i class="fa fa-bars fa-2x" onclick="menuShow()"></i>
</div>
<ul> 
    <li> <a href="#">Parceiros</a></li>
    <li> <a href="#" className="active">COMECE AQUI</a></li>
</ul>
</navbar>

</div>
)
}