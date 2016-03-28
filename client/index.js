Template.index.events({
    'click #rechercheannonce': function (){
    Router.go('listeannonce');
    } ,
    'click #deposer': function (){
     Router.go('form');
    } ,



    'click #rechercher': function (){
        annonce.titre = $('#titre').val();
       Router.go('listannonce');
    } ,




});

Template.index.registerHelper({
    recherche:function() {
        return Annonce.find({tags:{$in: [/^a/,/^b/]}}).fetch();
    }
});

