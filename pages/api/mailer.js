const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: 'smtp.mail.ru',
  port: 465,
  secure: true,
    auth: {
      user: process.env.NEXT_PUBLIC_EMAIL_LOGIN,
      pass: process.env.NEXT_PUBLIC_EMAIL_PASSWORD
    },
  },
  {
    from: '🔥WORK🔥 <lyskov.2000@mail.ru>'
  }
);


export default async (req, res) => {
  
  const {email, message} = JSON.parse(req.body);

  if (!email) res.status(400).json({status: 'no email'})
  if (!message) res.status(400).json({status: 'no message'})

  try {
    await transporter.sendMail({
      to: 'playboi.2000@mail.ru',
      subject: `🔥Зовут на работу🔥`,
      html: `
              <p class='font-size: 25px'><strong>Email: </strong><br/> ${email}</p>
              <p><strong>Сообщение: </strong><br/> ${message}</p>
            `,
    });

    res.status(200).json({status: 'ok'})
  }
  catch(err) {
    console.log("err", err)
    return res.status(400).json(err)
  }
  
}