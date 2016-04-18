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
    var userId = users.findOne().userId();
    user.Nom = $('#Nom').val();
    user.Prénom = $('#Prénom').val();
    user.emails = $('#emails').val();
    user.password = $('#password').val();
    user.confirmpass = ($('#confirmpass').val());
    Meteor.call('updateprofil', userId,user);
   Router.go('/profil');


}
});

