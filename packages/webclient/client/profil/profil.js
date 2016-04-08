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

    'click #list': function () {
      //annonce.user =Meteor.userId();
      // return Annonce.find().fetch();
       // console.log(Annonce.find().fetch())
       //  Session.set('templateUser','annoncedetails');

    },
    'click #modifier': function activer() {
        document.form.nom.disabled=false;
        document.form.prenom.disabled=false;
        document.form.adresse.disabled=false;
        document.form.email.disabled=false;
        document.form.password.disabled=false;
        document.form.confirmpass.disabled=false;
    },
'click #enregistrer': function(){

}
});
/*Meteor.profil.update({
    _id: newUsers
}, {
    $set: {
        firstName: user.nom,
        lastName: user.prenom,
        adresse: user.adresse,
        email: user.email,
       // isAdmin: false
    }
});*/