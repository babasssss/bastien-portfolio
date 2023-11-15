// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { data } from "autoprefixer"
import { mailOptions,transporter } from "../../config/nodemailer"

const handler = async (req, res) => {
  if (req.method === "POST") {
    const data = req.body
    if (!data.name || !data.email || !data.objet || !data.message) {
      return res.status(400).json({ message: 'Bad request' })
    }
  }

  try {
    await transporter.sendMail({
      ...mailOptions,
      subject: data.objet,
      text: "This is a text string",
      html: "<h1>Test title</h1><p>Some Body test</p>"
    })

    return res.status(200).json({ success: true })
  } catch (error) {
    console.log(error)
    return res.status(400).json({ message: error.message })
  }
  return res.status(400).json({ message: 'Bad request' })
}

export default handler