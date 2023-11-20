// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { transporter } from '../../config/nodemailer'
import ClientEmailContent from '../../components/ClientEmailContent'
import ReactDOMServer from 'react-dom/server'
import MeEmailContent from '../../components/MeEmailContent'

const handler = async (req, res) => {
  if (req.method === 'POST') {
    const data = req.body
    if (!data.name || !data.email || !data.objet || !data.message) {
      return res.status(400).json({ message: 'Bad request' })
    }
  }

  console.log('Mes infos:')
  console.log(req.body)
  try {
    const { name, email, objet, message } = req.body

    // Send Email to me
    const htmlEmailMe = ReactDOMServer.renderToStaticMarkup(<MeEmailContent name={name} email={email} objet={objet} message={message} />)
    await transporter.sendMail({
      from: process.env.SMTP_EMAIL,
      to: process.env.SMTP_EMAIL,
      subject: 'Contact - SOREAU Bastien',
      text: 'New contact',
      html: htmlEmailMe
    })
    console.log('Email envoyé ||ME||')

    // Send Email to Client
    const htmlEmailClient = ReactDOMServer.renderToStaticMarkup(<ClientEmailContent name={name} email={email} objet={objet} message={message} />)
    await transporter.sendMail({
      from: process.env.SMTP_EMAIL,
      to: email,
      subject: 'Contact - SOREAU Bastien',
      text: 'Confirmation',
      html: htmlEmailClient
    })
    console.log('Email envoyé ||CLIENT||')

    return res.status(200).json({ success: true })
  } catch (error) {
    console.log(error)
    return res.status(400).json({ message: error.message })
  }
}

export default handler
