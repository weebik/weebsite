import { getApiUrl } from "./apiConfig";

export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const sanitizeInput = (input: string): string => {
  return input.replace(/['"<>%;()&]/g, "");
};

export const submitContactForm = async (
  formData: { name: string; email: string; message: string },
  captchaToken: string | null,
  onSuccess: () => void,
  onError: (errorMessage: string) => void
): Promise<void> => {
  try {
    const response = await fetch(getApiUrl("/api/contact-forms"), {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        data: {
          ...formData,
          captcha: captchaToken,
        },
      }),
    });

    if (response.ok) {
      onSuccess();
    } else {
      const errorData = await response.json();
      onError(errorData.error.message || "Failed to send the message.");
    }
  } catch (error) {
    console.error("Error during form submission:", error);
    onError("An unexpected error occurred.");
  }
};
