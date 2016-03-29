/**
 *
 * Created by Amani on 07/03/2016.
 */
Router.configure({
    layoutTemplate: 'index'
});
Router.route('annonce/:_id', function(){
    return this.render('annonce', {
        data: function () {
            return Annonce.findOne({_id: this.params._id});
        }
    });
}, {name: 'annonce'});
Router.route('/listannonce/:categorie?', {
    name: 'listannonce',
    waitOn: function () {
        // return one handle, a function, or an array
        if(this.params.categorie)
            return Meteor.subscribe('listcat', this.params.categorie);
        return Meteor.subscribe('list');

    },

    action: function () {
        this.render('listannonce');
    }
});

Router.map(function () {
    this.route('home', {
        path: '/',
        waitOn: function() {
            return [
                Meteor.subscribe('items'),
                Meteor.subscribe('uploads')
            ];
        },
        data: function() {
            return {
                item: Items.findOne(),
                uploads: Uploads.find()
            }
        }
    });
});
Router.route('moncompte');
Router.route('contact');
Router.route('accueil');
Router.route('form');
Router.route('appartement');
Router.route('profil');
Router.route('profilUSER');

