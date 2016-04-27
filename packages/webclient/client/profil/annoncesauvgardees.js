/**
 * Created by Amani on 27/04/2016.
 */


if (Meteor.isClient) {

    Meteor.subscribe("annoncessauvgardees");


    Template.annoncesauvgardees.helpers({

        annoncessauvgardees: function () {
            if(Meteor.userId()) {
                var ids = Annoncess.find({user_id: Meteor.userId()}).fetch();
                var idss = ids.map(function (i) {
                    return i.ad_id;
                });
                var adds = Annonce.find({'_id': {$in: idss}}).fetch();
                return adds;
            }
        }

    })
}