import NavTabs from "./_LinkTab";
import logoLeft from "../../Images/stetsAndStixxSignatureLogoUpper.png"
import logoRight from "../../Images/stetsAndStixxSignatureLogoLower.png"
import './Navigation.css'
import { NavLink } from "react-router-dom";
import SocialMediaLinks from "./SocialMediaLinks";


export default function Nav() {
    return (
        <div className="navbar container">
            <div className="logo container">
                {/* <NavLink to='/'>
                    <img to="/" id="logo" src={stetsandstixx} alt="Stets and Sticks Logo"/>
                </NavLink> */}
                <NavLink to='/'>
                    <img to="/" id="logoUpper" src={logoLeft} alt="Stets and Sticks Logo"/>
                    <img to="/" id="logoLower" src={logoRight} alt="Stets and Sticks Logo"/>
                </NavLink>
                {/* <div className="company name navbar">
                    <h1 className="company title">Stets & Stixx</h1>
                    <h3 className="company subtitle">Mobile Cigar Bar</h3>
                </div> */}
            </div>
            <div className="navlinks container">
                <SocialMediaLinks />
                <NavTabs />
            </div>
        </div>
    )
}
