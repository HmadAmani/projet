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
Template.annoncedetails.events({
    'click #modif': function () {

      //Router.go('/formModif');

    },

    'click #supp':function(event){
event.target.getAttribute("annonceid");
        if (confirm('Are you sure?')) {
            Meteor.call('deleteAnnonce', this._id);
        }    }
});