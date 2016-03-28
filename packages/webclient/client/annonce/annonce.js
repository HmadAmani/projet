/**
 * Created by Amani on 06/03/2016.
 */

Meteor.methods({
    create: function(an){
        check(an.titre, String);
        check(an.adresse, String);
        check(an.description, String);
        check(an.prix, Number);
        check(an.categorie,String);
        check(an.gouvernorat,String);
        check(an.image,String);
        Annonce.insert(an);
    },

});
Template.annonce.helpers({
    annonce: function(){
        console.log(Annonce.findOne());
        return Annonce.findOne();
    }
});

if (Meteor.isClient){
    Meteor.subscribe("listannonce");

};



