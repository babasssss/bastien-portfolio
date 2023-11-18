import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
  host: 'mail.infomaniak.com',
  port: 465,
  secure: true,
  auth: {
    user: process.env.SMTP_EMAIL,
    pass: process.env.SMTP_PASSWORD
  }
})

export {
  transporter
}
