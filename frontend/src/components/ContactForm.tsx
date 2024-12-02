import React, { useState } from "react";
import { TextField, Box, Stack, Typography } from "@mui/material";
import { useLanguage } from "../hooks/useLanguage";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import "../styles/contactForm.css";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    // api
  };

  const { language } = useLanguage();

  const translations: {
    [key: string]: {
      description: string;
      name: string;
      email: string;
      message: string;
    };
  } = {
    pl: {
      description:
        "Jestem otwarty na nowe wyzwania i propozycje zawodowe. Napisz do mnie, aby porozmawiać o współpracy!",
      name: "Imię",
      email: "Email",
      message: "Wiadomość",
    },
    en: {
      description:
        "I am open to new challenges and job offers. Write to me to talk about cooperation!",
      name: "Name",
      email: "Email",
      message: "Message",
    },
  };

  return (
    <div className="mail-container">
      <Typography
        sx={{
          fontSize: { xs: "1rem", sm: "1.2rem", md: "2rem" },
          textAlign: "center",
          color: "white",
          marginBottom: "1em",
          marginLeft: "2em",
          marginRight: "2em",
        }}
      >
        {translations[language].description}
      </Typography>
      <Box component="form" onSubmit={handleSubmit} noValidate>
        <Stack spacing={2}>
          <TextField
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            fullWidth
            required
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  border: "none",
                },
              },
              "& .MuiInputBase-input": { color: "white" },
              "& .MuiInputLabel-root": { color: "white" },
              color: "white",
              borderRadius: "0.5em",
              resize: "none",
              transition: "filter 300ms ease-in-out",
              filter: "drop-shadow(0 0 0.2vw rgba(133, 163, 171, 0.2))",
              background: "rgba(22, 34, 55, 1)",
              "&:focus": {
                outline: "none",
                filter: "drop-shadow(0 0 0.3vw rgba(133, 163, 171, 0.4))",
              },
            }}
          />
          <TextField
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            fullWidth
            required
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  border: "none",
                },
              },
              "& .MuiInputBase-input": { color: "white" },
              "& .MuiInputLabel-root": { color: "white" },
              color: "white",
              borderRadius: "0.5em",
              resize: "none",
              transition: "filter 300ms ease-in-out",
              filter: "drop-shadow(0 0 0.2vw rgba(133, 163, 171, 0.2))",
              background: "rgba(22, 34, 55, 1)",
              "&:focus": {
                outline: "none",
                filter: "drop-shadow(0 0 0.3vw rgba(133, 163, 171, 0.4))",
              },
            }}
          />
          <TextField
            label="Message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            multiline
            rows={10}
            fullWidth
            required
            sx={{
              "& .MuiInputBase-root": {
                "& fieldset": {
                  border: "none",
                },
                "&.Mui-focused": {
                  filter: "drop-shadow(0 0 0.3vw rgba(133, 163, 171, 0.4))",
                },
              },
              "& .MuiInputBase-inputMultiline": { color: "white" },
              "& .MuiInputLabel-root": { color: "white" },
              color: "white",
              borderRadius: "0.5em",
              resize: "none",
              transition: "filter 300ms ease-in-out",
              filter: "drop-shadow(0 0 0.2vw rgba(133, 163, 171, 0.2))",
              background: "rgba(22, 34, 55, 1)",
            }}
          />
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            sx={{
              color: "white",
              padding: "0 1em",
            }}
          >
            <Box display="flex" alignItems="center" gap={2}>
              <FacebookIcon
                fontSize="large"
                sx={{ cursor: "pointer", "&:hover": { color: "#1877f2" } }}
              />
              <LinkedInIcon
                fontSize="large"
                sx={{ cursor: "pointer", "&:hover": { color: "#0a66c2" } }}
              />
              <GitHubIcon
                fontSize="large"
                sx={{ cursor: "pointer", "&:hover": { color: "#171515" } }}
              />
              <InstagramIcon
                fontSize="large"
                sx={{ cursor: "pointer", "&:hover": { color: "#e4405f" } }}
              />
            </Box>
            <SendRoundedIcon
              fontSize="large"
              sx={{ cursor: "pointer", "&:hover": { color: "#e4405f" } }}
            />
          </Box>
        </Stack>
      </Box>
    </div>
  );
}

export default ContactForm;
