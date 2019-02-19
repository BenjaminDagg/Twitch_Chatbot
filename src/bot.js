const tmi = require('tmi.js');

const password = "be3ap56atjfch4rk8i0xu4b6y3swp9";

/*
const opts = {
    identity: {
        username: 'ligament_champion',
        password: password
    },
    channels: ['ligament_champion']
};

const client = new tmi.client(opts);

client.on('connected', onConnectedHandler);
client.on('message', onMessageHandler);

client.connect();

function onMessageHandler (target, context, msg, self) {
    if (self) { return; } // Ignore messages from the bot

    // Remove whitespace from chat message
    const commandName = msg.trim();


    client.say(target,'hello');

}

function onConnectedHandler (addr, port) {
    console.log(`* Connected to ${addr}:${port}`);
    for (var i = 0; i < 10;i++) {
        client.say(opts.channels[0],'hello');
    }
}
*/

export class ChatBot {
    constructor(channel) {
        this.opts = {
            identity: {
                username: 'ligament_champion',
                password: password
            },
            channels: [channel]

        };
        this.client = new tmi.client(this.opts);

        this.client.on('connected', this.onConnectedHandler);


        this.client.connect();
    }

    onConnectedHandler (addr, port) {
        console.log(`* Connected to ${addr}:${port}`);

    }



    sendMessage(message, repeat) {
        repeat = repeat || 1;

        for (var i = 0; i < repeat;i++) {
            this.client.say(this.opts.channels[0], message);
        }
    }
}

