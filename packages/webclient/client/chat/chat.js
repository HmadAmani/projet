/**
 * Created by Amani on 01/04/2016.
 */
if (Meteor.isClient) {
    Template.messages.helpers({
        messages: function () {
            return Messages.find({}, {sort: {time: -1}});
        }
    });
}