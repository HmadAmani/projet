
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
})

