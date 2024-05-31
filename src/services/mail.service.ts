import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  requireTLS: true,
  auth: {
    user: process.env.senderEmail,
    pass: process.env.senderPassword,
  },
});

interface TSendMail {
  to: string;
  subject: string;
  html: string;
}
export const SendMail = async (data: TSendMail) => {
  transporter.sendMail(data, (err, info) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Email sent: " + info.response);
      return true;
    }
  });
};
