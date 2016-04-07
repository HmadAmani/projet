/**
 * Created by Amani on 01/04/2016.
 */
if (Meteor.isClient) {
  // session.get("messages",_id);
    Template.messages.helpers({
        messages: function() {
            return Messages.find();
        }
    });

    Template.chat.events = {
        'keydown input#message': function (event) {
            if (event.which == 13) { // 13 is the enter key event
                if (Meteor.user())
                    var name = Meteor.user().profile.name;

                var message = document.getElementById('message').value;
                console.log(message);
                var from = Meteor.userId();
                var message = document.getElementById('message');
                var to = message.getAttribute('data_id');
                console.log(to);
                if (message.value != '') {
                    Messages.insert({
                        from : from,
                        to: to,
                        name: name,
                        message: message.value,
                        time: Date.now(),
                    });

                    document.getElementById('message').value = '';
                    message.value = '';
                }
            }
        }
    }

};
