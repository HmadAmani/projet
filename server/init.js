/**
 * Created by Amani on 15/03/2016.
 */
Meteor.startup(function () {
    // init items collection
    // console.log(this.userId)
     if (Items.find().count() == 0) {
     Items.insert({name: 'My Item', uploads: []});
     }
    UploadServer.init({
        tmpDir: '/Users/Amani/IdeaProjects/untitled/public/Uploads/tmp',
        uploadDir: '/Users/Amani/IdeaProjects/untitled/public/Uploads/',
        checkCreateDirectories: true,
        getDirectory: function(fileInfo, formData) {
            if (formData && formData.directoryName != null) {
                return formData.directoryName;
            }
            return "";
        },
        getFileName: function(fileInfo, formData) {
            if (formData && formData.prefix != null) {
                return formData.prefix + '_' + fileInfo.name;
                console.log('File: ' + JSON.stringify(fileInfo));
            }
            return fileInfo.name;
        },
        finished: function(fileInfo, formData) {
            if (formData && formData._id != null) {
                Items.update({_id: formData._id}, { $push: { uploads: fileInfo }});
            }
        }
    });
});