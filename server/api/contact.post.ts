/* eslint-disable import/no-named-as-default-member */
import nodemailer from "nodemailer";

const config = useRuntimeConfig();

const transpoter = nodemailer.createTransport({
  service: config.SERVICE,
  auth: {
    user: config.MAIL_USER,
    pass: config.MAIL_PASSWORD,
  },
});

export default defineEventHandler(async (req) => {
  try {
    const body = await readBody(req);

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const mail = transpoter.sendMail({
      to: config.MAIL_CONTACT,
      subject: body.subject,
      text: body.message,
      html: body.message,
    });

    return {
      name: body.name,
      email: body.email,
      subject: body.subject,
      text: body.message,
      html: body.message,
      privacy: body.privacy,
    };
  } catch (error) {
    sendError(req, createError({ statusCode: 400 }));
  }
});
