/**
 * contact-form controller
 */

import { factories } from "@strapi/strapi";
import nodemailer from "nodemailer";
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

        const transporter = nodemailer.createTransport({
          service: "gmail",
          auth: {
            user: process.env.GMAIL_USER,
            pass: process.env.GMAIL_PASS,
          },
        });

        const mailOptions = {
          from: process.env.GMAIL_USER,
          to: process.env.MAIL_RECEIVER,
          subject: `Contact from ${formData.email}`,
          text: `
            ________________________________________            
            From: ${formData.name}
            ________________________________________
            Contact e-mail: ${formData.email}
            ________________________________________
            Message: ${formData.message}
          `,
        };

        await transporter.sendMail(mailOptions);

        const response = await super.create(ctx);
        return response;
      } catch (error) {
        console.error("Error while processing form:", error);
        return ctx.internalServerError("Error while processing form");
      }
    },
  })
);
