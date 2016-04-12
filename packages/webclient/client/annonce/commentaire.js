/**
 * Created by Amani on 12/04/2016.
 */
Template.annonce.events({
    'click #ajouterCommentaire': function(){
        commentaire = {};
        commentaire.contenu = $('#commentaire').val();
        commentaire.idannonce = this._id;
        commentaire.name = Meteor.user().profile.name;

        commentaire.iduser = Meteor.userId();
        var date=new Date();
        commentaire.date =date.toLocaleDateString();
        Meteor.call('createCom', commentaire);






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