import nodemailer from "nodemailer";

const config = useRuntimeConfig();

const transporter = nodemailer.createTransport({
  service: config.service,
  auth: {
    user: config.mailUser,
    pass: config.mailPassword,
  },
});

export default defineEventHandler(async (req) => {
  try {
    const body = await readBody(req);

    await transporter.sendMail({
      to: config.mailContact,
      subject: body.subject,
      text: body.message,
      html: body.message,
    });

    return { ...body };
  } catch (err: unknown) {
    // TypeScript no sabe qué es 'err', por eso 'unknown'
    const error = err instanceof Error ? err : new Error("Unknown error");
    sendError(req, createError({ statusCode: 400, message: error.message }));
  }
});