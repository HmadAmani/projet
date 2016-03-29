Template.index.events({
    'click #rechercheannonce': function (){
    Router.go('listeannonce');
    } ,
    'click #deposer': function (){
     Router.go('form');
    } ,

    'click #rechercher': function (){
       annonce.titre = $('#titre').val();
        var req = {tags:{$in: [/^UI._globalHelpers('recherche')(req)/]}};
       Router.go('listannonce');
    }




});

