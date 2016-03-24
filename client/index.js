Template.index.events({
    'click #rechercheannonce': function (){
    Router.go('listeannonce');
    } ,
    'click #deposer': function (){
     Router.go('/form');
    } ,



    'click #recherche': function (){
        annonce.adresse = $('#adresse').val();
        Meteor.call('rech', annonce);
        Session.set('listannonce');
    } ,

});