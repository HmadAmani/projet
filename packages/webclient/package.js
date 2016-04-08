Package.describe({
  name: 'webclient',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: '',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use('ecmascript');
  api.use('jquery');
  api.use('iron:router');
  api.use('blaze-html-templates');
  api.addFiles([
      'client/annonce/list-annonce.html',
      'client/annonce/listannonce.js',
      'client/annonce/annonce.html',
      'client/annonce/annonce.js',
      'client/formulaire/formulaire.html',
      'client/formulaire/formulaire.js',
      'client/compte/compte.html',
      'client/compte/compte.js',
      'client/contact/contact.html',
      'client/accueil/accueil.html',
      'client/accueil/accueil.js',
      'client/formulaire/form.html',
      'client/formulaire/form.js',
      'client/init.js',
      'client/profil/profil.html',
      'client/profil/profil.js',
      'client/profil/profilUser.html',
      'client/chat/chat.html',
      'client/chat/chat.js',
      'client/profil/annoncedetails.html',








  ], 'client');
api.addFiles('client/route.js');
});


/*Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('webclient');
  //api.addFiles('webclient-tests.js');
});
Package.describe({
    summary: "DB less realtime communication for meteor"
});

Package.on_use(function (api, where) {
    api.use('underscore', ['client', 'server']);
    api.add_files(['lib/ev.js', 'lib/server.js', 'lib/stream_permission.js'], 'server');
    api.add_files(['lib/ev.js', 'lib/client.js'], 'client');
});*/
