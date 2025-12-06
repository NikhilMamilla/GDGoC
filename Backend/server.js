if(process.env.NODE_ENV!="production"){
    require("dotenv").config();
}
const express=require("express");
const cors=require("cors");
const nodemailer=require("nodemailer");

const app=express();
app.use(cors());
app.use(express.json());

const transporter=nodemailer.createTransport({
  service:"gmail",
  auth:{
    user:process.env.EMAIL_USER,
    pass:process.env.EMAIL_PASS,
  },
});

app.post("/contact", async (req, res)=>{
  const { name, email, message }=req.body;
  if (!name || !email || !message)
    return res.status(400).json({ error: "All fields are required" });

  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.TO_EMAIL,
      subject: `New Contact Form Message from ${name}`,
      html: `
        <h2>New Message from GDG Website Contact Page</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Message:</b><br/>${message}</p>
      `,
    });

    res.json({ success: true, message: "Message sent successfully!" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to send email" });
  }
});

app.listen(process.env.PORT,()=>
  console.log(`🚀 Server running on port ${process.env.PORT}`)
);
