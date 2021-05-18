import nodemailer from "nodemailer";
import dotenv from 'dotenv';

dotenv.config();
//const hbs = require('nodemailer-express-handlebars');

// class Util {
//   constructor() {}

  //Send an email alert to change password request
    const sendOrderMail = async(orders, tot)=>{
        let transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 587,
            secure: false, // true for 465, false for other ports
            auth: {
              user: process.env.EMAIL, // generated ethereal user
              pass: process.env.EMAIL_PASS, // generated ethereal password
            },
          });
      
          let message = (
              '<h1> Thank you for purchasing with us</h1>' +
              '<table style="border: 1px solid #333; width: 100%; border-collapse: collapse;">' +
              '<thead>' +
              '<th> Item Name </th>' +
              '<th> Quantity </th>'  +
              '<th> Unit Price </th>'  +
              /*...*/
              '</thead>'
            ); 
            
            for(const order of orders) {
               message += (
                 '<tr style="text-align: center;">' +
                  '<td>' + order.itemName + '</td>' +
                  '<td>' + order.qty + '</td>' +
                  '<td>' + order.unitPrice + '</td>' +
                  /*...*/
                '</tr>'
               );
            }
            
            message +=  '</table>';
            
            message += `<br> <h2> Your Total is Rs: ${tot}/= <br> <h3> You will recive your order soon`
      
          //Send email with the message
          let info = await transporter.sendMail({
            from: '"Online Shopper" <nezuswear@gmail.com>', // sender address
            to: orders[0].email, // list of receivers
            subject: "Order Placed", // Subject line
            html: message
          });
    }
    //let testAccount = await nodemailer.createTestAccount();

    
//   }
// }
export default sendOrderMail;
// var UtilObj = new Util();
// exports default UtilObj;