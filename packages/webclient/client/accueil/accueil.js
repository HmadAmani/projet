/**
 * Created by Amani on 08/03/2016.
 */
if (Meteor.isClient) {
    Meteor.subscribe("accueil");

    Template.accueil.helpers({
        list_voiture_acceuil: function () {
            return Annonce.find();
        }

    });
}