
Annonce = new Mongo.Collection('annonce');
Adress = new Mongo.Collection('adress');
Categorie = new Mongo.Collection('categorie');
Commentaire = new Mongo.Collection('commentaire');
Appartement = new Mongo.Collection('appartement');
Items = new Mongo.Collection('items');
Uploads = new Mongo.Collection('uploads');
Db=new Mongo.Collection('db');
Messages = new Mongo.Collection('messages');



Uploads.allow({
    insert: function (userId, doc) {
        return true;
    },
    update: function (userId, doc, fields, modifier) {
        return true
    }
});