/**
 * contact-form controller
 */

import { factories } from "@strapi/strapi";
import axios from "axios";

export default factories.createCoreController(
  "api::contact-form.contact-form",
  ({ strapi }) => ({
    async create(ctx) {
      const { captcha, ...formData } = ctx.request.body.data;

      try {
        const captchaResponse = await axios.post(
          "https://www.google.com/recaptcha/api/siteverify",
          null,
          {
            params: {
              secret: process.env.RECAPTCHA_SECRET_KEY,
              response: captcha,
            },
          }
        );

        if (!captchaResponse.data.success) {
          return ctx.badRequest("Invalid CAPTCHA verification");
        }

        await strapi.plugins["email"].services.email.send({
          to: process.env.EMAIL_TO,
          subject: "New mail from WeebsiteCV",
          text: `Imię i nazwisko: ${formData.name}
                 E-mail: ${formData.email}
                 Wiadomość: ${formData.message}`,
          html: `<h1>${formData.name}</h1>
                 <h2>${formData.email}</h2>
                 <p>${formData.message}</p>`,
        });

        const response = await super.create(ctx);
        return response;
      } catch (error) {
        console.error("Error verifying CAPTCHA:", error);
        return ctx.internalServerError("CAPTCHA verification failed");
      }
    },
  })
);
