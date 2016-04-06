

Meteor.methods({
    create: function (an) {
        check(an.titre, String);
        check(an.adresse, String);
        check(an.description, String);
        check(an.prix, Number);
        check(an.categorie, String);
        check(an.gouvernorat, String);
        check(an.image,String);
        check(an._id,Number);
        Annonce.insert(an);
        console.log(Annonce);
    },
        'recherche':function(an){
            check(an.titre,String);
            console.log(Annonce);

      },
   /*'ajouteMessage' : function (post) {
        var timestamp = Math.round(new Date().getTime() / 1000);
        Messages.insert({
            _id : post._id,
            message : post.message,
            time : timestamp,
        });
    },*/
   // Messages.insert();



   /* update : function(newProfile) {
        if(this.userId)
            Meteor.users.update(this.userId, {$set : { profile : newProfile }});
    },
   /* 'envoimsg':function(msg){
        check(msg.text,String);
        console.log(Console);
    },*/


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