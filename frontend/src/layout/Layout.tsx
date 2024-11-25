import { AppBar, Toolbar, Container, Box, Typography } from "@mui/material";
import "../styles/navBar.css";
import { Link } from "react-router-dom";
import { ReactNode } from "react";
import Footer from "../components/Footer";

function Layout({ children }: { children: ReactNode }) {
  const isLandingPage = true;

  return (
    <>
      <AppBar
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "10vh",
          background: "transparent",
          boxShadow: "none",
        }}
        position="static"
      >
        <Toolbar className="navBar">
          <Link to="/home" style={{ textDecoration: "none", color: "white" }}>
            <Typography fontSize="1.5rem" fontWeight={700} variant="button">
              Home
            </Typography>
          </Link>
          <Link
            to="/about-me"
            style={{ textDecoration: "none", color: "white" }}
          >
            <Typography fontSize="1.5rem" fontWeight={700} variant="button">
              About
            </Typography>
          </Link>
          <Link
            to="/portfolio"
            style={{ textDecoration: "none", color: "white" }}
          >
            <Typography fontSize="1.5rem" fontWeight={700} variant="button">
              Portfolio
            </Typography>
          </Link>
          <Link
            to="/contact"
            style={{ textDecoration: "none", color: "white" }}
          >
            <Typography fontSize="1.5rem" fontWeight={700} variant="button">
              Contact
            </Typography>
          </Link>
        </Toolbar>
      </AppBar>
      <Container sx={{ mt: 4 }}>
        <Box>{children}</Box>
      </Container>
      <Footer isLandingPage={isLandingPage} />
    </>
  );
}

export default Layout;
