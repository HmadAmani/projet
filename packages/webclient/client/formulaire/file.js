/**
 * Created by Amani on 04/05/2016.
 */
if (Meteor.isClient) {
    Files = new Meteor.Collection(null);

    Template.fileUpload.events({
        'change input[type=file]': function (e, tmpl) {
            var input = tmpl.find('input[type=file]');
            var files = input.files;
            var file;
            var mFile;

            for (var i = 0; i < files.length; i++) {
                mFile = new MeteorFile(files[i], {
                    collection: Files
                });

                Files.insert(mFile, function (err, res) {
                    mFile.upload(files[i], "uploadFile");
                });
            }
        }
    });

    Template.fileUpload.helpers({
        files: function () {
            return Files.find();
        }
    });

    Template.fileUploadRow.helpers({
        uploadCompleteClass: function () {
            return this.uploadProgress == 100 ? 'progress-success' : '';
        }
    });
}

if (Meteor.isServer) {
    Meteor.methods({
        uploadFile: function (file) {
            file.save('/Users/cmather/tmp/uploads/');
        }
    });
}