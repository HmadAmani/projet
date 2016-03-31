/**
 * Created by Amani on 31/03/2016.
 */
chatStream = new Meteor.Stream('chat');

chatStream.permissions.write(function() {
    return true;
});

chatStream.permissions.read(function() {
    return true;
});
