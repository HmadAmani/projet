/**
 * Created by Amani on 22/03/2016.
 */
Template.form.helpers({
    annonce: function() {

        return Annonce.findOne();
    },
    filesToUpload: function() {
        return Uploader.info.get();
    }
});

Template.form.events({
    'click #valider': function(){
        annonce = {};
        annonce.titre = $('#titre').val();
        annonce.adresse = $('#adresse').val();
        annonce.description = $('#desc').val();
        annonce.prix = Number($('#prix').val());
        annonce.categorie= $('#categorie').val();
        annonce.gouvernorat = $('#gouvernorat').val();
        annonce.image = $('#imgupload-1').val();
        Meteor.call('create', annonce);
    }
});