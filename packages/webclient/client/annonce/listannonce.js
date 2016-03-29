/**
 * Created by Amani on 04/03/2016.
 */
if (Meteor.isClient) {
    Template.listannonce.helpers({
        list: function () {
            return Annonce.find().fetch();
            console.log(Annonce.find().fetch())
        }
    });


}
Template.listannonce.helpers({
    listannonce: function () {
        return Annonce.find({  $or:  [ {"categorie": $('#rechercher').val()},{"gouvernorat": $('#rechercher').val()}] }).fetch();
    }
});