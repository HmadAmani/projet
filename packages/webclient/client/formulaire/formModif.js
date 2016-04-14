/**
 * Created by Amani on 14/04/2016.
 */
Template.formModif.helpers({

    template : function(){
        return Session.get('template');
    }


});
Template.formModif.events({
    'click #sauvgarder': function(){
        if(Meteor.userId()) {

                annonce = {};
                annonce.titre = $('#titre').val();
                annonce.adresse = $('#adresse').val();
                annonce.description = $('#desc').val();
                annonce.prix = Number($('#prix').val());
                annonce.categorie = $('#categorie').val();
                annonce.gouvernorat = $('#gouvernorat').val();
                annonce.image = $('#imgupload-1').val();
                annonce.date = new Date();
                annonce.userId = Meteor.userId();
                var template = Session.get('template');
                switch (template) {
                    case'Appartement':
                        annonce.type = $('#type').val();
                        annonce.nombrepiece = $('#nombrepiece').val();
                        annonce.surface = $('#surface').val();
                        annonce.placeparking = $('#placeparking').val();
                        annonce.nombresalledebain = $('#nombresalledebain').val();
                        break;
                    case 'Maison':
                        annonce.type = $('#type').val();
                        annonce.nombrepiece = $('#nombrepiece').val();
                        annonce.surfaceh = $('#surfaceh').val();
                        annonce.surfacep = $('#surfacep').val();
                        annonce.placeparking = $('#placeparking').val();
                        annonce.nombresalledebain = $('#nombresalledebain').val();
                        break;
                    case 'Immobilier de vacances':
                        annonce.type = $('#type').val();
                        annonce.nombrepiece = $('#nombrepiece').val();
                        annonce.surfaceh = $('#surfaceh').val();
                        annonce.surfacep = $('#surfacep').val();
                        annonce.placeparking = $('#placeparking').val();
                        annonce.nombresalledebain = $('#nombresalledebain').val();
                        break;
                    case'Bureaux et Plateaux':
                        annonce.type = $('#type').val();
                        annonce.nombrepiece = $('#nombrepiece').val();
                        annonce.surface = $('#surface').val();
                        break;
                    case'Magazins et commerces':
                        annonce.type = $('#type').val();
                        annonce.surface = $('#surface').val();
                        break;
                    case'Terrain':
                        annonce.type = $('#type').val();
                        annonce.surface = $('#surface').val();
                        break;
                    case 'Collocation':
                        annonce.surfaceh = $('#surfaceh').val();
                        annonce.meuble = $('#meuble').val();
                        break;
                    case'Voiture':
                        annonce.marque = $('#marque').val();
                        annonce.carrosserie = $('#carrosserie').val();
                        annonce.anneemodel = $('#anneemodel').val();
                        annonce.kilometrage = $('#kilometrage').val();
                        annonce.energie = $('#energie').val();
                        annonce.boitevitesse = $('#boitevitesse').val();
                        annonce.transmission = $('#transmission').val();
                        annonce.puissance = $('#puissance').val();
                        annonce.condition = $('#condition').val();
                        break;
                    case'Fourgonettes':
                        annonce.type = $('#type').val();
                        annonce.anneemodel = $('#marque').val();
                        annonce.kilometrage = $('#kilometrage').val();
                        annonce.energie = $('#energie').val();
                        annonce.puissance = $('#puissance').val();
                        annonce.condition = $('#condition').val();
                        break;

                    case'Moto':
                        annonce.carrosserie = $('#carrosserie').val();
                        annonce.anneemodel = $('#anneemodel').val();
                        annonce.kilometrage = $('#kilometrage').val();
                        annonce.cylindre = $('#cylindre').val();
                        annonce.condition = $('#condition').val();
                        break;
                    case'Autres véhicules industrielles':
                        annonce.anneemodel = $('#anneemodel').val();
                        annonce.kilometrage = $('#kilometrage').val();
                        annonce.energie = $('#energie').val();
                        annonce.condition = $('#condition').val();
                        break;
                    case'Tracteurs et véhicules agricoles':
                        annonce.anneemodel = $('#anneemodel').val();
                        annonce.kilometrage = $('#kilometrage').val();
                        annonce.energie = $('#energie').val();
                        annonce.condition = $('#condition').val();
                        break;
                    case'Pièces de rechange et accessoires':
                        annonce.type = $('#type').val();
                        annonce.marque = $('#marque').val();
                        annonce.modele = $('#modele').val();
                        annonce.anneemodel = $('#anneemodel').val();
                        annonce.condition = $('#condition').val();


                }
                Meteor.call('update', annonce);
            }

            Router.go(('/profil'));
        },
        "change #categorie" :function() {
            categorie = $("#categorie option:selected").text();
            Session.set("template",categorie);
        }
});