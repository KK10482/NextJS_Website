import React, { useState, useEffect } from 'react'
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import { styled } from "@mui/system";
import Navbar from './navbar';
// import SideDrawer from "./sideDrawer";
import { useRouter as UseRouter } from "next/router";



const Offset = styled("div")(({ theme }) => theme.mixins.toolbar);
const validSubPath = "/forms/auth/?eai=";

const Header = () => {
     const router = UseRouter();

     const navLinks = [
          { title: 'Home', path: `/`, label: 'home' },
          { title: 'Claim', path: `/forms`, label: 'claim' },
          { title: 'FAQ', path: `/faqs`, label: 'faq' },
          { title: 'Contact', path: `/contact`, label: 'contact' },
     ];

     
     return (
          <>
               <AppBar position="fixed">
                    <Toolbar variant='regular'>
                         <Container
                              maxWidth="lg"
                              sx={{ display: `flex`, justifyContent: `space-between` }}
                         >
                              <Navbar navLinks={navLinks} />
                              {/* <SideDrawer navLinks={navLinks} /> */}
                              
                         </Container>
                    </Toolbar>
               </AppBar>
               <Offset />
          </>
     );
};

export default Header;
