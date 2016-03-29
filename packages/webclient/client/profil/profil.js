/**
 * Created by Amani on 29/03/2016.
 */
Template.profil.helpers({

    templateUser: function(){
        return Session.get('templateUser');
    }
});

Template.profil.events({
    'click #home': function () {
        Session.set('templateUser','profilUser');
        console.log(Session.get('templateUser'))
    },

    'click #liste': function () {
        // Session.set('', '');
    }
});