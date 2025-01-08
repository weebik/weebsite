import { TextField, Box, Stack, Typography } from "@mui/material";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import "../styles/contactForm.css";
import MediaLinks from "./MediaLinks";

interface contactFormProps {
  text: string;
  nameLabel: string;
  messageLabel: string;
}

function ContactForm({ text, nameLabel, messageLabel }: contactFormProps) {
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
        {text}
      </Typography>
      <Box component="form" noValidate>
        <Stack spacing={2}>
          <TextField
            label={nameLabel}
            name="name"
            fullWidth
            required
            autoComplete="off"
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
            fullWidth
            required
            autoComplete="off"
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
            label={messageLabel}
            name="message"
            multiline
            rows={10}
            fullWidth
            required
            autoComplete="off"
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
            <MediaLinks />
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
