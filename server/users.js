/**
 * Created by Amani on 31/03/2016.
 */
Meteor.publish("user-info", function(id) {
    return Meteor.users.find({_id: id}, {fields: {username: 1}});
});