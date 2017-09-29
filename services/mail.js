
var nodemailer = require('nodemailer');
exports.sendMail = function(to,subject,message) {
   var smtpConfig = {
      service: 'Gmail',
      auth: {
          user: '', //gmail username
          pass: ''  //gmailPassword
      }
   };
   var transporter = nodemailer.createTransport(smtpConfig);
   var mailOptions = {
      from: '"Rohit Shukla" <rohitshukla80@gmail.com>', // sender address
      to: to, // list of receivers
      subject: subject, // Subject line
      html: message, // html body
      /*attachments : {   // define custom content type for the attachment
           filename: 'text.txt',
           content: 'hello world!',
           contentType: 'text/plain'
      }*/
        attachments: [{ 
            filename: 'pdf-sample.pdf',
            path:  process.cwd()+'/doc/pdf-sample.pdf',
            contentType: 'application/pdf' 
         },
         { 
            filename: 'pdf-sample1.pdf',
            path:  process.cwd()+'/doc/pdf-sample1.pdf',
            contentType: 'application/pdf' 
         },
         { 
            filename: 'images.png',
            path:  process.cwd()+'/doc/images.png',
            contentType: 'application/image' 
         }
         ]
   };
   
   transporter.sendMail(mailOptions, function(error, info){
      if(error)
      {
         return console.log(error);
      }
      else
      {
         return console.log(info.response);
      }      
   }); 
}
