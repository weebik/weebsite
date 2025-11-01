import { postData, endpoints } from './apiConfig';

export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const sanitizeInput = (input: string): string => {
  return input.replace(/['"<>%;()&]/g, '');
};

export const submitContactForm = async (
  formData: { name: string; email: string; message: string },
  captchaToken: string | null,
  onSuccess: () => void,
  onError: (errorMessage: string) => void,
): Promise<void> => {
  try {
    const response = await postData(endpoints.contactForm(), {
      ...formData,
      captcha: captchaToken,
    });

    if (response) {
      onSuccess();
    } else {
      onError('Failed to send the message.');
    }
  } catch (error) {
    console.error('Error during form submission:', error);
    onError('An unexpected error occurred.');
  }
};
