import { useState } from "react";
import { TextField, Box, Stack, Button, CircularProgress } from "@mui/material";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import "../styles/contactForm.css";
import MediaLinks from "./MediaLinks";
import ReCAPTCHA from "react-google-recaptcha";

interface contactFormProps {
  text: string;
  nameLabel: string;
  messageLabel: string;
}

function ContactForm({ text, nameLabel, messageLabel }: contactFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({
    name: false,
    email: false,
    message: false,
    captcha: false,
  });
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCaptchaChange = (token: string | null) => {
    setCaptchaToken(token);
    setErrors((prev) => ({ ...prev, captcha: !token }));
  };

  const handleSubmit = async () => {
    const newErrors = {
      name: !formData.name.trim(),
      email: !validateEmail(formData.email),
      message: !formData.message.trim(),
      captcha: !captchaToken,
    };
    setErrors(newErrors);

    const isValid = Object.values(newErrors).every((error) => !error);

    if (!isValid) {
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch("http://localhost:1337/api/contact-forms", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          data: {
            name: formData.name,
            email: formData.email,
            message: formData.message,
            captcha: captchaToken,
          },
        }),
      });

      if (response.ok) {
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
        setCaptchaToken(null);
      } else {
        const errorData = await response.json();
        alert(`Error: ${errorData.error.message}`);
      }
    } catch (error) {
      console.error("Error sending the form:", error);
      alert("An unexpected error occurred.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputStyle = {
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        border: "none",
      },
    },
    "& .MuiInputBase-input": { color: "var(--text)" },
    "& .MuiInputLabel-root": { color: "var(--sec2)" },

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
  };

  return (
    <div className="mail-container">
      <div className="mail-text">{text}</div>
      <Box component="form" noValidate>
        <Stack spacing={2}>
          <TextField
            label={nameLabel}
            name="name"
            fullWidth
            required
            autoComplete="off"
            sx={inputStyle}
            value={formData.name}
            onChange={handleChange}
            error={errors.name}
            helperText={errors.name ? "Name is required" : ""}
          />
          <TextField
            label="Email"
            name="email"
            type="email"
            fullWidth
            required
            autoComplete="off"
            sx={inputStyle}
            value={formData.email}
            onChange={handleChange}
            error={errors.email}
            helperText={errors.email ? "Invalid email address" : ""}
          />
          <TextField
            label={messageLabel}
            name="message"
            multiline
            rows={10}
            fullWidth
            required
            autoComplete="off"
            sx={inputStyle}
            value={formData.message}
            onChange={handleChange}
            error={errors.message}
            helperText={errors.message ? "Message cannot be empty" : ""}
          />
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            sx={{
              padding: "0 2vw",
            }}
          >
            <MediaLinks />
            {captchaToken ? (
              <Button
                onClick={handleSubmit}
                disabled={isSubmitting}
                sx={{
                  backgroundColor: "var(--pri2)",
                  borderRadius: "1em",
                  color: "white",
                  transition: "all 0.3s ease-in-out",
                  "&:hover": { color: "var(--pri1)", scale: "1.1" },
                }}
              >
                {isSubmitting ? (
                  <CircularProgress size={35} sx={{ color: "white" }} />
                ) : (
                  <SendRoundedIcon
                    fontSize="large"
                    sx={{
                      cursor: "pointer",
                    }}
                  />
                )}
              </Button>
            ) : (
              <ReCAPTCHA
                sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                onChange={handleCaptchaChange}
                theme="dark"
                size="normal"
              />
            )}
          </Box>
        </Stack>
      </Box>
    </div>
  );
}

export default ContactForm;
