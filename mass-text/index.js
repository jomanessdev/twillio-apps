var MongoClient = require('mongodb').MongoClient;

const mongoUrl = "mongodb://localhost:27017/latham";

const _sid = 'AC6882eec6de6cd830da98e8800749584f';
const _authToken = 'fad2037dfc1b24fcdcc99e1c536343a8';
const _fromNumber = '9842051019';

const twilioClient = require('twilio')(_sid,_authToken);

function sendMessage(_to,_message) {
    twilioClient.messages.create({from: _fromNumber, body: _message, to: _to}).then((message) => {
        console.log('Message Respone', message);
    }).catch((err) => {
        console.log(`ERROR`, err);
    });
}

const _person = 'Jordan';
const _number = '9196002049';

var _lathamStudentsFall18 = [ 
    { number: '+19196002049', name: 'Jordan'},  
    { number: '+19105150637', name: ''}, 
    { number: '+19804659397', name: ''}, 
    { number: '+13479226808', name: 'Anthony'}, 
    { number: '+12404686794', name: 'Savontae'}, 
    { number: '+19195230071', name: 'Shawn'}, 
    { number: '+19807293950', name: 'Iverson'}, 
    { number: '+19802088417', name: 'Juawarren'}, 
    { number: '+17047267337', name: 'Jaylen'}, 
    { number: '+19196733509', name: `I'noz`}, 
    { number: '+13364489149', name: 'Khalil'}, 
    { number: '+13365902434', name: ''}, 
    { number: '+19196335316', name: 'Isaiah'}, 
    { number: '+19199456918', name: ''}, 
    { number: '+12522878508', name: ''}, 
    { number: '+19107338943', name: `Je'Bryne`}, 
    { number: '+19193398694', name: 'Tyrese'}, 
    { number: '+17044651865', name: ''}, 
    { number: '+12523613751', name: 'Isaiah'}, 
    { number: '+15618538495', name: 'Omar'}, 
    { number: '+19196700493', name: ''},
    
    ///ADMINS
    { number: '+9107285089', name: 'Dominique'}, 
    { number: '+19199713864', name: 'Bria'}, 
    { number: '+9196000808', name: 'Pastor John'},
    { number: '+9193689445', name: 'Sis. B'},


    { number: '+7049633796', name: 'Centese'},
    { number: '+9193942660', name: 'Andre'},
    { number: '+9195231515', name: `D'andre`},
    // { number: '+9197858703', name: `Duane`},
];

// MongoClient.connect(mongoUrl, function(err,db){
//     if(err) throw err;
//     var dbo = db.db('latham');

//     dbo.collection('survey').distinct('From').then(function(err,result){
//         if(err) throw err;

//         console.log('MyResult',result);
//         db.close();
//     }).catch(err => {
//         console.log('error',err);
//     });
// });

function sendMassMessages(_contacts) {
    for(let i of _contacts){
        var _message;
        if(i.name === ''){
            i.name = 'sir';
        }
        _message = `Hello ${i.name}! Self-branding Workshop TODAY @6:30PM in Latham Hall Lobby = FREE PIZZA, CAMERA HEADSHOTS and PROFESSIONAL COACHING.  Topics cover resume development, business attire and how to sell yourself. Don't miss it!`;
        sendMessage(i.number,_message);
    }
}

sendMassMessages(_lathamStudentsFall18);
//sendMessage(`+1${_number}`,`Hello ${_person}! Self-branding Workshop TODAY @6:30PM in Latham Hall Lobby = FREE PIZZA, CAMERA HEADSHOTS and PROFESSIONAL COACHING.  Topics cover resume development, business attire and how to sell yourself. Don't miss it!`);