import React, { useEffect } from "react";
import {
    Box,
    FooterContainer,
    Row,
    Column,
    FooterLink,
    Heading,
} from "./FooterStyles";
import { styled } from '@mui/material';
import "./Footer.css"


// const StyledFooterContainer = styled((props) => <FooterContainer {...props}/>)(
//     ({ theme }) => ({
//       display: 'flex',
//       flexDirection: 'row',
//       fontFamily: theme.typography.fontFamily,
//       justifyContent: 'center',
//       gap: 30
//   })
// );

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
                                        }}
                                    >
                                        Facebook
                                    </span>
                                </i>
                            </FooterLink>
                            <FooterLink href="#">
                                <i className="fab fa-instagram">
                                    <span
                                        style={{
                                            marginLeft: "10px",
                                        }}
                                    >
                                        Instagram
                                    </span>
                                </i>
                            </FooterLink>
                            <FooterLink href="#">
                            <i className="fa-solid fa-at">
                                    <span
                                        style={{
                                            marginLeft: "10px",
                                        }}
                                    >
                                        Email
                                    </span>
                                </i>
                            </FooterLink>
                </FooterContainer>
            </Box>
        // </div>

    );
};

export default Footer;
