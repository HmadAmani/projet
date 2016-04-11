
Meteor.publish('list', function(){
  return Annonce.find({});
});

Meteor.publish('annonce', function(id){
  return Annonce.find({_id: id});
});
Meteor.publish('listcat', function(categorie){
  return Annonce.find({categorie: categorie});
});

Meteor.publish('uploads', function() {
  return Uploads.find();
});

Meteor.publish('items', function() {
  return Items.find();
});
Meteor.publish('comments', function() {
  return Comments.find();
});
Meteor.publish('posts', function() {
  return Posts.find();
});
Meteor.publish('messages', function(_id) {

  return Messages.find({$or : [{from: this.userId, to:_id},{to:this.userId, from:_id}]});
});
/*Meteor.publish('annoncedetails', function(_id) {

  return Annonce.find(this.userId);
});*/
Meteor.publish("userStatus", function() {
  return Meteor.users.find({ "status.online": true }, { fields: { } });
});
