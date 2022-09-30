const DatabaseChannel = require("../@core/Notification/Channels/DatabaseChannel");
const FirebaseChannel = require("../@core/Notification/Channels/FirebaseChannel");
const MailChannel = require("../@core/Notification/Channels/MailChannel");

module.exports = {
    channels : ['database','firebase','mail'],
}