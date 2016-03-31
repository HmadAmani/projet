Template.index.events({
    'click #rechercheannonce': function (){
    Router.go('listeannonce');
    } ,
    'click #deposer': function (){
     Router.go('form');
    } ,

    'click #rechercher': function (){
      return annonce.titre = $('#titre').val();
     //   var req = {tags:{$in: [/^UI._globalHelpers('recherche')(req)/]}};
      // Router.go('listannonce');
    }




});

/*Accounts.onLogin(function(user){
    var routeName = Router.current().route.getName();
    if(routeName=='form') { Router.go('/profile');
    }
});*/