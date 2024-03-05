import NavTabs from "./_LinkTab";
import stetsandstixx from "../../Images/stetsandstixx.png"
import './Navigation.css'


export default function Nav() {
    return (
        <>
            <div className="navbar container">
                <div className="logo container">
                    <img className="logo" src={stetsandstixx} alt="Stets and Sticks Logo"/>
                </div>
                <NavTabs />
            </div>
        </>
    )
}
