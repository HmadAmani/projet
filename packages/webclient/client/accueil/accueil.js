/**
 * Created by Amani on 08/03/2016.
 */
if (Meteor.isClient) {
    Meteor.subscribe("accueil");

    Template.accueil.helpers({
        list_voiture_acceuil: function () {
            return Annonce.find({categorie: "moto"},{limit: 5});
        },
       appartement: function () {
            return Annonce.find({categorie: "appartement"},{limit: 5});
        }

    });


}
Template.accueil.events({
    'click #adview_save_ad_main_btn': function () {

        var x= $('#adview_save_ad_main_btn').attr('data_id');
        Meteor.call('sauvgarder', x);


        console.log(x);

    }
});