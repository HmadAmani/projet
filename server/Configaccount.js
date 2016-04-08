/**
 * Created by Amani on 31/03/2016.
 */
Accounts.onLogin(function() {

    if (Meteor.user().services.facebook) {
        var facebookId = Meteor.user().services.facebook.id;
        Meteor.users.update({
            _id: Meteor.userId()
        }, {
            $set: {
                "profile.display_picture": "http://graph.facebook.com/" + facebookId + "/picture?type=square"
            }
        });
    }
    return true;
});
/*Accounts.onLogin(function(user){
 var routeName = Router.current().route.getName();
 if(routeName=='form') { Router.go('/profile');
 }
 });*/