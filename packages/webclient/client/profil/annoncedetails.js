/**
 * Created by Amani on 08/04/2016.
 */
if (Meteor.isClient) {

    Meteor.subscribe("data");
    Template.annoncedetails.helpers({

        data: function () {
            return Annonce.find({userId: Meteor.userId()}).fetch();

        }
    });
}