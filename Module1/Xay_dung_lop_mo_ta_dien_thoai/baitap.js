class Mobile {
    constructor() {
        this.battery = 100;
        this.isTurnedOn = false;
        this.draftMessage = '';
        this.inbox = [];
        this.sentMessages = [];
    }

    togglePhone() {
        this.isTurnedOn = !this.isTurnedOn;
        if (this.isTurnedOn) {
            document.getElementById('status').textContent = 'Phone is ON';
        } else {
            document.getElementById('status').textContent = 'Phone is OFF';
        }
        this.decreaseBattery();
    }

    chargePhone() {
        if (this.isTurnedOn) {
            this.battery = 100;
            document.getElementById('battery').textContent = `Battery: ${this.battery}%`;
        }
    }

    composeMessage(message) {
        if (this.isTurnedOn) {
            this.draftMessage = message;
            document.getElementById('message').textContent = `Draft: ${this.draftMessage}`;
            this.decreaseBattery();
        }
    }

    sendMessage(recipient) {
        if (this.isTurnedOn && this.draftMessage && recipient) {
            this.sentMessages.push({ recipient, message: this.draftMessage });
            this.draftMessage = '';
            document.getElementById('message').textContent = 'Draft: ';
            this.decreaseBattery();
        }
    }

    viewInbox() {
        if (this.isTurnedOn) {
            let inboxMessages = 'Inbox:\n';
            for (const message of this.inbox) {
                inboxMessages += `${message.sender}: ${message.message}\n`;
            }
            alert(inboxMessages);
            this.decreaseBattery();
        }
    }

    viewSentMessages() {
        if (this.isTurnedOn) {
            let sentMessages = 'Sent Messages:\n';
            for (const message of this.sentMessages) {
                sentMessages += `${message.recipient}: ${message.message}\n`;
            }
            alert(sentMessages);
            this.decreaseBattery();
        }
    }

    decreaseBattery() {
        if (this.isTurnedOn) {
            this.battery -= 1;
            document.getElementById('battery').textContent = `Battery: ${this.battery}%`;
            if (this.battery <= 0) {
                this.isTurnedOn = false;
                document.getElementById('status').textContent = 'Phone is OFF';
                alert('Phone is out of battery.');
            }
        }
    }
}

const mobilePhone = new Mobile();

function togglePhone() {
    mobilePhone.togglePhone();
}

function chargePhone() {
    mobilePhone.chargePhone();
}

function composeMessage() {
    const message = prompt('Enter your message:');
    mobilePhone.composeMessage(message);
}

function sendMessage() {
    const recipient = prompt('Enter recipient:');
    mobilePhone.sendMessage(recipient);
}

function viewInbox() {
    mobilePhone.viewInbox();
}

function viewSentMessages() {
    mobilePhone.viewSentMessages();
}