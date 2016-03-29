/**
 * Created by Amani on 04/03/2016.
 */
if (Meteor.isClient) {
    Template.listannonce.helpers({
        list: function () {
            return Annonce.find(req).fetch();
            console.log(Annonce.find().fetch())
        }
    });


}