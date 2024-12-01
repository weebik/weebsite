import React, { useState } from "react";
import { TextField, Button, Box, Stack } from "@mui/material";
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

  return (
    <div className="mail-container">
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
            }}
          />
          <TextField
            label="Message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            multiline
            rows={4}
            fullWidth
            required
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  border: "none",
                },
              },
            }}
          />
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Send
          </Button>
        </Stack>
      </Box>
    </div>
  );
}

export default ContactForm;
