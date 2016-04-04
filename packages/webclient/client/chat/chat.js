/**
 * Created by Amani on 01/04/2016.
 */
if (Meteor.isClient) {
    Template.messages.helpers({
        messages: function() {
            return Messages.find({userId: Meteor.userId()}, { sort: { time: -1}});
        }
    });

    Template.input.events = {
        'keydown input#message' : function (event) {
            if (event.which == 13) { // 13 is the enter key event
                if (Meteor.user())
                    var name = Meteor.user().profile.name;

                var message = document.getElementById('message');
                if (message.value != '') {
                    Messages.insert({
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
