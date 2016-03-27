Template.index.events({
    'click #rechercheannonce': function (){
    Router.go('listeannonce');
    } ,
    'click #deposer': function (){
     Router.go('form');
    } ,



    'click #rechercher': function (){
        annonce.adresse = $('#adresse').val();
       Router.go('listannonce');
    } ,
    'click #search':function(){
        Db.inventory.find( { tags: { $in: [ /^be/, /^st/ ] } } );

    },



});


