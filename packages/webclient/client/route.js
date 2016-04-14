/**
 *
 * Created by Amani on 07/03/2016.
 */
Router.configure({
    layoutTemplate: 'index'
});
Router.route('/annonce/:_id' ,{
        name: "annonce",
   // return this.render('annonce', {
        data: function () {
            return Annonce.findOne({_id: this.params._id});
        }
    });
//},
Router.route('/listannonce/:categorie?', {
    name: 'listannonce',
    waitOn: function () {
        // return one handle, a function, or an array
        if(this.params.categorie)
            return Meteor.subscribe('listcat', this.params.categorie);
        return Meteor.subscribe('listannonce');

    },

    action: function () {
        this.render('listannonce');
    }
});
/*Router.route('/list/:gouvernorat?', {
    name: 'list',
    waitOn: function () {
        // return one handle, a function, or an array
        if(this.params.gouvernorat)
            return Meteor.subscribe('ville', this.params.gouvernorat);
        return Meteor.subscribe('list');

    },

    action: function () {
        this.render('list');
    }
});*/

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
Router.route('list');
Router.route('commentaire');


Router.route('/annoncedetails/:_id', {

    name: "annoncedetails",

    data: function(){
        annonce.user =Meteor.userId();

        return Annonce.findOne({_id: this.params._id});

    }

});

Router.route('chat', {
    path: '/chat/:_id',
    waitOn: function() {
        return  Meteor.subscribe('messages', this.params._id);
    },
    data: function() {
        return {
            _id_chat: this.params._id
        }
    },
    action: function () {
        this.render('chat');
    }
});
Router.route('welcome');
Router.route('messages');
Router.route('input');
Router.route('affichagenotification');
Router.route('affichagedetnotification');
Router.route('formModif',{
    path: 'formModif/:_id',
    waitOn: function(){
        return Meteor.subscribe('annonce',_id);
    }
});
