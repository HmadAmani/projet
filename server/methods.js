



Meteor.methods({
    create: function (an) {
        check(an.titre, String);
        check(an.adresse, String);
        check(an.description, String);
        check(an.prix, Number);
        check(an.categorie, String);
        check(an.gouvernorat, String);
        check(an.image,String);
        Annonce.insert(an);
        console.log(Annonce);
    },

    'deleteFile': function(_id) {
        check(_id, String);

        var upload = Uploads.findOne(_id);
        if (upload == null) {
            throw new Meteor.Error(404, 'Upload not found');
        }

        UploadServer.delete(upload.path);
        Uploads.remove(_id);
    }
});