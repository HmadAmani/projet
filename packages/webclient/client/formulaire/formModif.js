/**
 * Created by Amani on 14/04/2016.
 */
Template.formModif.helpers({

    template : function(){
        return Session.get('template');
    },
    an: function(){
        return Annonce.findOne();
    },
    filesToUpload: function() {
        return Uploader.info.get();
    },



});
Template.formModif.events({
    'click #sauvgarder': function() {
        var an = {};
        var _id=this._id;
       // var _id = Annonce.findOne()._id;
        an.titre = $('#titre').val();
        an.description = $('#desc').val();
        an.prix = Number($('#prix').val());
        an.numero = Number($('#numero').val());
        an.categorie = ($('#categorie').val());
        an.gouvernorat = ($('#gouvernorat').val());
        an.url =Session.get('image');
        Meteor.call('update', _id, an);
            Router.go(('/profil'));
        },
        "change #categorie" :function() {
            categorie = $("#categorie option:selected").text();
            Session.set("template",categorie);
        }
});