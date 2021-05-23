import nodemailer from "nodemailer";
import dotenv from 'dotenv';

dotenv.config();

const sendMail = async(order, type)=>{
    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
          user: process.env.EMAIL, // generated ethereal user
          pass: process.env.EMAIL_PASS, // generated ethereal password
        },
      });

      let message, sender;
  
      if(type === "card"){
        sender = 'Bank'
        message = (
          `<h1>Hello ${order.name}..</h1>
          Card Number: **** **** **** ${order.cardNumber.toString().slice(12,17)} <br>
          Transaction Amount: Rs ${order.amount}<br>
          Transaction Status: Paid`
          );
      }else{
        sender = 'Mobile Company'
        message = (
          `<h1>Hello ${order.name}..</h1>
          Phone Number: 0** **** ${order.mobileNumber.slice(8,11)} <br>
          Transaction Amount: Rs ${order.amount}<br>
          Added to Bill: Successful`
          );
      }
  
      //Send email with the message
      let info = await transporter.sendMail({
        from: `"${sender}" <nezuswear@gmail.com>`, // sender address
        to: order.email, // list of receivers
        subject: "Purchase Message", // Subject line
        html: message
      });
}
    //let testAccount = await nodemailer.createTestAccount();
export default sendMail;