import { FooterLink } from "../Footer/FooterStyles";
import './Navigation.css'

export default function SocialMediaLinks() {
    return (
        <div className="media container">
            
            <FooterLink href="#">
                <i className="fab fa-facebook media upper icons">
                    <span
                        style={{
                            marginLeft: "10px",
                            fontFamily: "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif",
                            fontWeight: '400',
                            WebkitFontSmoothing: 'antialased',
                            MozOsxFontSmoothing: 'grayscale'
                        }}
                    >
                    </span>
                </i>
            </FooterLink>
            <FooterLink href="#">
                <i className="fab fa-instagram media upper icons">
                    <span
                        style={{
                            marginLeft: "10px",
                            fontFamily: "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif",
                            fontWeight: '400',
                            WebkitFontSmoothing: 'antialased',
                            MozOsxFontSmoothing: 'grayscale'
                        }}
                    >
                    </span>
                </i>
            </FooterLink>
        </div>
    )
}
