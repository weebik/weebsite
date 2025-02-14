import { useState } from 'react';
import { Fab, Box, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';
import routes from '../routes/routes';
import { useLanguage } from '../hooks/useLanguage';
import english from '../assets/english.svg';
import polish from '../assets/polish.svg';
import { navTranslations } from '../consts/navTranslations';

function MobileNav() {
  const { language, toggleLanguage } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <>
      <Fab
        onClick={toggleMenu}
        sx={{
          position: 'absolute',
          top: '20px',
          left: '20px',
          zIndex: 1200,
          background:
            'linear-gradient(180deg, rgba(158, 109, 200, 1) 0%, rgba(75, 109, 133, 1) 100%)',
          boxShadow: '0px 0px 10px rgba(255, 255, 255, 0.25)',
        }}
      >
        <Typography
          sx={{
            fontWeight: 700,
            color: 'white',
            fontSize: '1.2rem',
          }}
        >
          ☰
        </Typography>
      </Fab>

      {menuOpen && (
        <Box
          sx={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            background: 'rgba(27, 32, 41, 0.95)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1100,
          }}
        >
          {routes.map(
            ({ path }) =>
              navTranslations[language][path] && (
                <NavLink
                  key={path}
                  to={path}
                  onClick={toggleMenu}
                  style={{
                    minWidth: '200px',
                    color: 'white',
                    margin: '10px',
                    padding: '10px',
                    textDecoration: 'none',
                    fontSize: '1.5rem',
                    borderRadius: '200px',
                    backgroundColor: 'rgba(62, 55, 126, 0.8)',
                    textAlign: 'center',
                  }}
                >
                  {navTranslations[language][path]}
                </NavLink>
              ),
          )}
        </Box>
      )}
      <Fab
        className="language-button"
        onClick={toggleLanguage}
        sx={{ position: 'absolute', top: '20px', right: '20px' }}
      >
        <img
          src={language === 'en' ? polish : english}
          alt={language === 'en' ? 'PL' : 'EN'}
          style={{ width: '30px', height: '30px' }}
        />
      </Fab>
    </>
  );
}

export default MobileNav;
