import { d as defineEventHandler, r as readBody, u as useRuntimeConfig, s as sendError, c as createError } from '../../nitro/nitro.mjs';
import nodemailer from 'nodemailer';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'vue-router';

const config = useRuntimeConfig();
const transporter = nodemailer.createTransport({
  service: config.service,
  auth: {
    user: config.mailUser,
    pass: config.mailPassword
  }
});
const contact_post = defineEventHandler(async (req) => {
  try {
    const body = await readBody(req);
    await transporter.sendMail({
      to: config.mailContact,
      subject: body.subject,
      text: body.message,
      html: body.message
    });
    return { ...body };
  } catch (err) {
    const error = err instanceof Error ? err : new Error("Unknown error");
    sendError(req, createError({ statusCode: 400, message: error.message }));
  }
});

export { contact_post as default };
//# sourceMappingURL=contact.post.mjs.map
