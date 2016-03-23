Template.index.events({
    'click #recherche': function (){
    Router.go('/listeannonce');
    } ,
    'click #deposer': function (){
     Router.go('/form');
    } ,


});