import nodemailer from "nodemailer";
import dotenv from 'dotenv';

dotenv.config();

const sendMail = async(order)=>{
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
        '<h1> Your order is on the way</h1>' +
        '<table style="border: 1px solid #333; width: 100%; border-collapse: collapse;">' +
        '<thead>' +
        '<th> Item Name </th>' +
        '<th> Location </th>'  +
        /*...*/
        '</thead>'
      ); 
      let orders = order.items
      for(const order of orders) {
         message += (
           '<tr style="text-align: center;">' +
            '<td>' + order.item.ItemName + '</td>' +
            '<td>' + order.item.seller.address + '</td>' +
            /*...*/
          '</tr>'
         );
      }
      
      message +=  '</table>';
      
      message += `<br><h3> You will recive your order soon</h3>`

  
      //Send email with the message
      let info = await transporter.sendMail({
        from: `"Delivery Service" <nezuswear@gmail.com>`, // sender address
        to: order.customer.email, // list of receivers
        subject: "Delivery Message", // Subject line
        html: message
      });
}
    //let testAccount = await nodemailer.createTestAccount();
export default sendMail;