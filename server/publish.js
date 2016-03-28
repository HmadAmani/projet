
Meteor.publish('list', function(){
  return Annonce.find({});

if(recherche=null){
  return
  else
  return Annonce.find(({titre: titre}));

}

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

