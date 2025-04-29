// api/server.js
import express from 'express';
import nodemailer from 'nodemailer';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';

dotenv.config(); // načteme .env

const app = express();
app.use(bodyParser.json());

// vytvoříme transporter podle .env
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,                         // např. smtp.m1.websupport.sk
  port: Number(process.env.SMTP_PORT),                 // 465 nebo 587
  secure: process.env.SMTP_SECURE === 'true',          // true pro TLS na 465
  auth: {
    user: process.env.SMTP_USER,                       // info@carboncil.cz
    pass: process.env.SMTP_PASS,                       // heslo schránky
  },
});

// endpoint přijme data z formuláře a pošle e-mail
app.post('/api/contact', async (req, res) => {
  const { name, email, phone, product, message } = req.body;
  try {
    await transporter.sendMail({
      from: `"Web Kontakt" <${process.env.SMTP_USER}>`,
      to:   process.env.MY_RECEIVER_EMAIL,              // opět info@carboncil.cz
      subject: `Nová zpráva od ${name}`,
      html: `
        <p><strong>Jméno:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Telefon:</strong> ${phone}</p>
        <p><strong>Produkt:</strong> ${product}</p>
        <p><strong>Zpráva:</strong><br/>${message}</p>
      `
    });
    res.status(200).json({ status: 'ok' });
  } catch(err) {
    console.error('Chyba při odesílání mailu:', err);
    res.status(500).json({ status: 'error', error: err.message });
  }
});

// spustíme server na portu z .env nebo defaultně 3001
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server běží na portu ${PORT}`);
});
