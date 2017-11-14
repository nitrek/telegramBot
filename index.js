const TelegramBot = require('node-telegram-bot-api');
const token = '468144383:AAFKVvjViuzKUPcSsg3b4XAt2tON6t5eM1s';
const bot = new TelegramBot(token, {polling: true});

bot.on('message', (msg) => {
    
var Hi = "hi";
if (msg.text.toString().toLowerCase().indexOf(Hi) === 0) {
bot.sendMessage(msg.chat.id,"Hello "+msg.from.first_name);
    
}
var Help = "help";
if (msg.text.toString().toLowerCase().indexOf(Help) === 0) {
bot.sendMessage(msg.chat.id, "Type or Select from options below", {
"reply_markup": {
"keyboard": [["/sendpic"],["/account"],["/location"],["hi","bye"]]
    }
});

    
}
    
var bye = "bye";
if (msg.text.toString().toLowerCase().includes(bye)) {
bot.sendMessage(msg.chat.id, "Hope to see you around again , Bye");
}
var l5 = "last 5 transactions";
if (msg.text.toString().toLowerCase().includes(l5)) {
bot.sendMessage(msg.chat.id, "Paytm  : 14 November 2017 : ₹ 324");
bot.sendMessage(msg.chat.id, "Amazon  : 11 November 2017 : ₹ 7452");
bot.sendMessage(msg.chat.id, "Ani Technology  : 10 November 2017 : ₹ 29");
bot.sendMessage(msg.chat.id, "Zomato  : 10 November 2017 : ₹ 2429");
bot.sendMessage(msg.chat.id, "Uber  : 09 November 2017 : ₹ 98");
}
var l3 = "last 3 transactions";
if (msg.text.toString().toLowerCase().includes(l3)) {
bot.sendMessage(msg.chat.id, "Paytm  : 14 November 2017 : ₹ 324");
bot.sendMessage(msg.chat.id, "Amazon  : 11 November 2017 : ₹ 7452");
bot.sendMessage(msg.chat.id, "Ani Technology  : 10 November 2017 : ₹ 29");
}
var cb = "request a call back";
if (msg.text.toString().toLowerCase().includes(cb)) {
bot.sendMessage(msg.chat.id, "Okay ,A agent will call in next 24 hours.");
}

var location = "branch location";
    if (msg.text.indexOf(location) === 0) {
        bot.sendLocation(msg.chat.id,18.5272751,73.8767933);
        bot.sendMessage(msg.chat.id, "Here is the nearest HSBC Branch");

    }
	  var locationa = "atm location";
    if (msg.text.toLowerCase().includes(locationa)) {
        bot.sendLocation(msg.chat.id,18.5517381,73.8911982);
        bot.sendMessage(msg.chat.id, "Here is the nearest HSBC Branch");

    }
var ch = "connect with a human";
if (msg.text.toString().toLowerCase().includes(ch)) {
bot.sendMessage(msg.chat.id, "Connecting with a real perosn please wait..");
//await me.sleep(2000);
bot.sendMessage(msg.chat.id, "Current wait time is less than 1 min");
//await me.sleep(2000);
bot.sendMessage(msg.chat.id, "You are now connected to Jerome");
//await me.sleep(2000);
bot.sendMessage(msg.chat.id, "Hi, How can i help you?");
}
var ab = "account balance";
if (msg.text.toString().toLowerCase().includes(ab)) {
bot.sendMessage(msg.chat.id, "Here is your primary account balance : ₹ 3,156,221 CR");
bot.sendMessage(msg.chat.id, "Credit Card Balance : ₹ 6815 DR ");
}
else
{
bot.sendMessage(msg.chat.id, "I don't understand , type /help to know available commands");

}
});

bot.onText(/\/start/, (msg) => {

bot.sendMessage(msg.chat.id, "Welcome To HSBC Chatbot, I am Here To Help You type /help to know more");
    
});

bot.onText(/\/sendpic/, (msg) => {

bot.sendPhoto(msg.chat.id,"https://s2.reutersmedia.net/resources/r/?m=02&d=20170120&t=2&i=1169493978&r=LYNXMPED0J0Z4&w=1280",{caption : "Here we go ! \nPhoto of the HSBC Building "} );
    
});

bot.onText(/\/account/, (msg) => {
    
bot.sendMessage(msg.chat.id, "Please Select A option", {
"reply_markup": {
"keyboard": [["account balance"],["Last 5 transactions"], ["Last 3 Transactions"],["Request a call back"],["Connect With a Human"]]
    }
});
    
});

bot.onText(/\/help/, (msg) => {
    
bot.sendMessage(msg.chat.id, "Welcome", {
"reply_markup": {
"keyboard": [["/sendpic"],["/account"],["/location"],["hi","bye"]]
    }
});
    
});
bot.onText(/\/location/, (msg) => {
    
bot.sendMessage(msg.chat.id, "Welcome", {
"reply_markup": {
"keyboard": [["branch location"],["atm location"]]
    }
});
    
});

