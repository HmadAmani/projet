/**
 * Created by Amani on 29/03/2016.
 */
Template.profil.helpers({

    templateUser: function () {
        return Session.get('templateUser');
    },
    current: function () {
    Meteor.users.find(Meteor.userId());
}
});

Template.profil.events({
    'click #home': function () {
        Session.set('templateUser','profilUser');
        console.log(Session.get('templateUser'))
    },

    'click #list': function () {
        Session.set('templateUser','annoncedetails');
        console.log(Session.get('templateUser'))


    },
   'click #modifier': function activer() {
        document.form.nom.disabled=false;
        document.form.prenom.disabled=false;
        document.form.email.disabled=false;
        document.form.password.disabled=false;
        document.form.confirmpass.disabled=false;
    },
'click #enregistrer': function(){
    var user = {};
   Nom = $('#nom').val();
    Prénom = $('#prenom').val();
    emails = $('#emails').val();
    user.password = $('#password').val();
    user.confirmpass = ($('#confirmpass').val());
/*
    if (confirm('Are you sure?')) {
        Meteor.call('update', Meteor.userId(),user);
    }*/
    Meteor.users.update(Meteor.userId(), {
        $set: {
            "profile.Nom": Nom,
            "profile.Prénom": Prénom,
           //  "emails.0.address": emails,
        }
    })
  // Meteor.call('update', userId,user);
   Router.go('/profil');


},

});

