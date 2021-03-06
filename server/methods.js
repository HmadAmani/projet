

Meteor.methods({
    create: function (an) {
        check(an.titre, String);
        check(an.adresse, String);
        check(an.description, String);
        check(an.prix, Number);
        check(an.numero, Number);
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
    update: function(_id, an) {
        check(an.titre, String);
        check(an.description, String);
        check(an.prix, Number);
        check(an.numero, Number);

        Annonce.update(_id, {
            $set: {
                titre: an.titre,
                description: an.description,
                prix: an.prix,
                numero: an.numero,
                adresse: an.adresse,
                categorie: an.categorie,
              gouvernorat: an.gouvernorat,
            }
        })
    },
    update: function(userId, user) {
        check(user.Nom, String);
        check(user.Prénom, String);
        check(user.emails,String);

       Meteor.users.update(userId, {
            $set: {
                Nom: user.Nom,
                Prénom: user.Prénom,
                ville: user.ville,
            }
        })
    },

     sauvgarder:function(_id) {
        if(this.userId && _id)
         Annoncess.insert({user_id: this.userId, ad_id: _id});
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

if (Meteor.isServer) {

    Meteor.startup(function() {

        return Meteor.methods({

            deleteAnnonce: function(_id) {

                return Annonce.remove(_id);

            }

        });

    });

}
Houston.methods("annonce", {
    "Publish": function (annonce) {
        Annonce.update(annonce._id, {$set: {published: true}});
        return annonce.name + " published successfully.";
    }
});
Houston.methods("users", {
    "Publish": function (users) {
        Users.update(users._id, {$set: {published: true}});
        return users.name + " published successfully.";
    }
});
Houston.add_collection(Meteor.users);

Meteor.methods({
    sendEmail: function (to, from, subject, text) {
        check([to, from, subject, text], [String]);

        this.unblock();

        Email.send({
            to: 'ameni.hmad@gmail.com',
            from: 'ameni.hmad@hotmail.fr',
            subject: 'Meteor Can Send Emails via Gmail',
            text:' text'
        });
    }
});



