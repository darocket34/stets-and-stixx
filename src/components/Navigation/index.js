import NavTabs from "./_LinkTab";
import stetsandstixx from "../../Images/stetsandstixx.png"
import './Navigation.css'
import { NavLink } from "react-router-dom";


export default function Nav() {
    return (
        <div className="navbar container">
            <div className="logo container">
                <NavLink to='/'>
                    <img to="/" id="logo" src={stetsandstixx} alt="Stets and Sticks Logo"/>
                </NavLink>
            </div>
            <NavTabs />
        </div>
    )
}
