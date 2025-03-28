import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
dotenv.config();
const sendMail = ({ email, subject, html }) => { 

    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'mipschool108@gmail.com',
          pass: "wxog pivw gjxu cavg"
        }
      });
      
      let mailOptions = {
        from: 'mipschool108@gmail.com',
        to: email,
        subject: subject,
        html: html
      };
      
     transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });
    
    
}
export default sendMail;