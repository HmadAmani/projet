/**
 * Created by Amani on 27/04/2016.
 */


if (Meteor.isClient) {

    Meteor.subscribe("annoncessauvgardees");


    Template.annoncesauvgardees.helpers({

        annoncessauvgardees: function () {

            AnnoncesSauvgardées.find({iduser: Meteor.userId()}).map(function (an) {

                return an._id;
            });
            return AnnoncesSauvgardées.find(_id);
        }

    })
}