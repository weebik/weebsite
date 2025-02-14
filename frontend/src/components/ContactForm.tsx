import { useState } from 'react';
import { TextField, Box, Stack, Button, CircularProgress } from '@mui/material';
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import '../styles/contactForm.css';
import MediaLinks from './MediaLinks';
import ReCAPTCHA from 'react-google-recaptcha';
import { ContactFormProps } from '../types/contactForm.type';
import {
  sanitizeInput,
  validateEmail,
  submitContactForm,
} from '../utils/formUtils';
import { inputStyle } from '../consts/inputStyle';

function ContactForm({ text, nameLabel, messageLabel }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState({
    name: false,
    email: false,
    message: false,
    captcha: false,
  });
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

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

    if (Object.values(newErrors).some((error) => error)) return;

    setIsSubmitting(true);
    const sanitizedData = {
      name: sanitizeInput(formData.name),
      email: sanitizeInput(formData.email),
      message: sanitizeInput(formData.message),
    };

    await submitContactForm(
      sanitizedData,
      captchaToken,
      () => {
        alert('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
        setCaptchaToken(null);
      },
      (errorMessage) => {
        alert(errorMessage);
      },
    );
    setIsSubmitting(false);
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
            helperText={errors.name ? 'Name is required' : ''}
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
            helperText={errors.email ? 'Invalid email address' : ''}
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
            helperText={errors.message ? 'Message cannot be empty' : ''}
          />
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            sx={{
              padding: '0 2vw',
            }}
          >
            <MediaLinks />
            {captchaToken ? (
              <Button
                onClick={handleSubmit}
                disabled={isSubmitting}
                sx={{
                  backgroundColor: 'var(--pri2)',
                  borderRadius: '1em',
                  color: 'white',
                  transition: 'all 0.3s ease-in-out',
                  '&:hover': { color: 'var(--pri1)', scale: '1.1' },
                }}
              >
                {isSubmitting ? (
                  <CircularProgress size={35} sx={{ color: 'white' }} />
                ) : (
                  <SendRoundedIcon
                    fontSize="large"
                    sx={{
                      cursor: 'pointer',
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
    </div>
  );
}

export default ContactForm;
