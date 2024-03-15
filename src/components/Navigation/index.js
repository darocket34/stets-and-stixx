import NavTabs from "./_LinkTab";
import stetsandstixx from "../../Images/stetsandstixx.png"
import logoUpper from "../../Images/stetsAndStixxSignatureLogoUpper.png"
import logoLower from "../../Images/stetsAndStixxSignatureLogoLower.png"
import './Navigation.css'
import { NavLink } from "react-router-dom";
import SocialMediaLinks from "./SocialMediaLinks";
import { Box } from "@mui/material";


export default function Nav() {
    return (
        <div className="navbar container">
            <div className="logo container">
                {/* <NavLink to='/'>
                    <img to="/" id="logo" src={stetsandstixx} alt="Stets and Sticks Logo"/>
                </NavLink> */}
                <NavLink to='/'>
                    <img to="/" id="logoUpper" src={logoUpper} alt="Stets and Sticks Logo"/>
                    <img to="/" id="logoLower" src={logoLower} alt="Stets and Sticks Logo"/>
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
