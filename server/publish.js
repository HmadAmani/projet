
Meteor.publish('list', function(categorie){
  if(categorie)
    return Annonce.find({categorie: categorie});
  else
     return Annonce.find({});
});
/*Meteor.publish('listannonce', function(gouvernorat) {

  return Annonce.find({gouvernorat: gouvernorat});
});*/
Meteor.publish('annonce', function(id){
  return Annonce.find({_id: id});
});
Meteor.publish('ville', function(gouvernorat){
  return Annonce.find({gouvernorat: gouvernorat});
});

Meteor.publish('uploads', function() {
  return Uploads.find();
});

Meteor.publish('items', function() {
  return Items.find();
});
Meteor.publish('list_commentaire', function(){
  return Commentaire.find();
});
Meteor.publish('posts', function() {
  return Posts.find();
});
Meteor.publish('messages', function(_id) {

  return Messages.find({$or : [{from: this.userId, to:_id},{to:this.userId, from:_id}]});
});
Meteor.publish('data', function() {

  return Annonce.find();
});
Meteor.publish('list_notification', function(){
  return Notifications.find({userId: this.userId, read:false});
});

Meteor.publish("userStatus", function() {
  return Meteor.users.find({ "status.online": true }, { fields: { } });
});
