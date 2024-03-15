import React, { useEffect } from "react";
import {
    Box,
    FooterContainer,
    FooterLink,
    Heading,
} from "./FooterStyles";
import "./Footer.css"


const Footer = () => {

    useEffect(() => {
        // Load Curator.io script
        const script = document.createElement('script');
        script.async = true;
        script.charset = 'UTF-8';
        script.src = 'https://cdn.curator.io/published/d4d69b7d-6d19-42b9-a153-d3119f81176a.js';
        document.body.appendChild(script);

        return () => {
          // Cleanup: remove script when component unmounts
          document.body.removeChild(script);
        };
      }, []);

    return (
        // <div className="footer container">
            <Box>
                <div id="curator-feed-default-feed-layout"></div>
                    <FooterContainer>
                        <FooterLink href="#">
                            <i className="fab fa-facebook">
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
                            <i className="fab fa-instagram">
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
                        {/* <FooterLink href="#">
                        <i className="fa-solid fa-at">
                                <span
                                    style={{
                                        marginLeft: "10px",
                                        fontFamily: "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif",
                                        fontWeight: '400',
                                        WebkitFontSmoothing: 'antialased',
                                        MozOsxFontSmoothing: 'grayscale'
                                    }}
                                >
                                    Email
                                </span>
                            </i>
                        </FooterLink> */}
                    </FooterContainer>
            </Box>
        // </div>

    );
};

export default Footer;
