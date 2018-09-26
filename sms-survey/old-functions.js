
function respond(){
    const response = new MessagingResponse();
    const message = response.message();
    message.body('Hello World!');
    response.redirect('https://demo.twilio.com/welcome/sms/');
    console.log(response.toString());
}

function sendMessage(){
    client.messages.create({
        body: 'Hello from Node',
        to: '+19196002049',  // Text this number
        from: '+19842051019' // From a valid Twilio number
    })
    .then((message) => console.log(message.sid));
}


// var accountSid = 'AC6882eec6de6cd830da98e8800749584f'; // Your Account SID from www.twilio.com/console
// var authToken = 'fad2037dfc1b24fcdcc99e1c536343a8';   // Your Auth Token from www.twilio.com/console
// var client = new twilio(accountSid, authToken);