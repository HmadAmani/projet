

Meteor.methods({
    create: function (an) {
        check(an.titre, String);
        check(an.adresse, String);
        check(an.description, String);
        check(an.prix, Number);
        check(an.categorie, String);
        check(an.gouvernorat, String);
        check(an.image,String);
       // check(an.userId,String);
        Annonce.insert(an);
        console.log(Annonce);
    },
        'recherche':function(an){
            check(an.titre,String);
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
Houston.methods("Posts", {
    "Publish": function (post) {
        Posts.update(post._id, {$set: {published: true}});
        return post.name + " published successfully.";
    }
});
Meteor.methods({

    createCom: function (com) {
        var name = Meteor.user().profile.name;

        check(com.contenu, String);
        check(com.idannonce, String);
        check(com.iduser, String);

        Commentaire.insert(com);

        // notifications(com);


    },

    createnotification: function (not) {
        check(not.url, String);
        check(not.titre, String);
        // check(not.vu,0);
        check(not.utilisateur, String);
        //  check(not.date, String);

        Notifications.insert(not);
    },
});