/**
 * Created by Amani on 12/04/2016.
 */
Template.annonce.events({
    'click #ajouterCommentaire': function(){
        commentaire = {};
        commentaire.contenu = $('#commentaire').val();
        commentaire.idannonce = this._id;
        commentaire.name = Meteor.user().profile.name;
        commentaire.photo = Meteor.user().profile.display_picture;

        commentaire.iduser = Meteor.userId();
        var date=new Date();
        commentaire.date =date.toLocaleDateString();
        Meteor.call('createCom', commentaire);


        notifications = {};
        notifications.url = Router.current().url;
        notifications.titre = "a commenté une annonce";
        notifications.vu = 0;
        notifications.utilisateur =Meteor.userId();
        notifications.name = Meteor.user().profile.name;
        notifications.date = new Date();
        Meteor.call('createnotification', notifications);


    }
});
if (Meteor.isClient) {
    Meteor.subscribe("list_commentaire");
    Template.annonce.helpers({
        list_commentaire: function (id) {
            if (Meteor.user())
                var name = Meteor.user().profile.name;
            //collectionuser = Meteor.users.findOne({_id: this.iduser});
            return Commentaire.find({idannonce: this._id}).fetch();

            //return Commentaire.find({$and: [ {idannonce:this._id},{ collectionuser.username}]}).fetch();
        }
    });
}
Template.affichagenotification.helpers({
    list_notification: function () {
        // var an=Annonce.find( {_id: this._id} );

        return Notifications.find({$and: [ {utilisateur:Meteor.userId()},{ vu:0 } ] } ).count();
    }
});

Template.affichagedetnotification.helpers({
    list_det_notification: function () {

        return Notifications.find({$and: [ {utilisateur:Meteor.userId()},{ vu:0 } ] } );
    }
});