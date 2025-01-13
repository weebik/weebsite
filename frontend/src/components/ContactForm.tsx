import { useState } from "react";
import {
  TextField,
  Box,
  Stack,
  Button,
  CircularProgress,
  Snackbar,
  Alert,
} from "@mui/material";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import "../styles/contactForm.css";
import MediaLinks from "./MediaLinks";
import ReCAPTCHA from "react-google-recaptcha";
import { getApiUrl } from "../utils/apiConfig";

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

  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success" as "success" | "error",
  });

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const sanitizeInput = (input: string) => {
    return input.replace(/['"<>%;()&]/g, "");
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

    const sanitizedName = sanitizeInput(formData.name);
    const sanitizedEmail = sanitizeInput(formData.email);
    const sanitizedMessage = sanitizeInput(formData.message);

    setIsSubmitting(true);
    try {
      const response = await fetch(getApiUrl("/api/contact-forms"), {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          data: {
            name: sanitizedName,
            email: sanitizedEmail,
            message: sanitizedMessage,
            captcha: captchaToken,
          },
        }),
      });

      if (response.ok) {
        setSnackbar({
          open: true,
          message: "Message sent successfully!",
          severity: "success",
        });
        setFormData({ name: "", email: "", message: "" });
        setCaptchaToken(null);
      } else {
        const errorData = await response.json();
        setSnackbar({
          open: true,
          message: `Error: ${errorData.error.message}`,
          severity: "error",
        });
      }
    } catch (error) {
      console.error("Error sending the form:", error);
      setSnackbar({
        open: true,
        message: "An unexpected error occurred.",
        severity: "error",
      });
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

  const handleCloseSnackbar = () => {
    setSnackbar((prev) => ({ ...prev, open: false }));
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
                sitekey="6LfoJLQqAAAAAHuk6qJNseBto83_YAQ-RAyzObfR"
                onChange={handleCaptchaChange}
                theme="dark"
                size="normal"
              />
            )}
          </Box>
        </Stack>
      </Box>
      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={snackbar.severity}
          sx={{ width: "100%" }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </div>
  );
}

export default ContactForm;
