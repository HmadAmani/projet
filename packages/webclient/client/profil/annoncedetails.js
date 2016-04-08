/**
 * Created by Amani on 08/04/2016.
 */
if (Meteor.isClient) {
    Template.annonedetails.helpers({
        list: function () {
            return Annonce.find().fetch();
            console.log(Annonce.find().fetch())
        }
    });


}