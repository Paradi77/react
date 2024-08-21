import { CardWidgets } from "./CardWidgets/CardWidgets";
import "./NavBar.css"

export const NavBar = () => {
  return (
    <>
      <nav className="NavBar">
        <h3>Sabor Gaucho</h3>
        <ul className="List">
          <li><a href="#">Mates</a></li>
          <li><a href="#">Bombillas</a></li>
          <li><a href="#">Termos</a></li>
          <li><a href="#">Yerbas</a></li>
          <li><a href="#">Matera</a></li>
          <CardWidgets/>  
        </ul>
        
      </nav>
    </>
  )
}

