//Mail Function
var mailFunc = require('./services/mail');

var message = '<p style="color:red">This is HTML content</p>';
//Call Mail function
mailFunc.sendMail('rohit.shukla@silverpush.co','Welcome to ExpertPHP.in',message);
