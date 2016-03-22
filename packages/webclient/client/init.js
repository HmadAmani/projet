/**
 * Created by Amani on 15/03/2016.
 */
Meteor.startup(function() {
    Uploader.finished = function(index, file) {

            Uploads.insert(file);
        }
});