/**
 * Created by Amani on 04/03/2016.
 */
if (Meteor.isClient) {
    Template.listannonce.helpers({
        list: function () {
            return Annonce.find().fetch();
            console.log(Annonce.find().fetch())
        }
    });


}
Template.listannonce.helpers({
    listannonce: function () {
        return Annonce.find({  $or:  [ {"categorie": $('#rechercher').val()},{"gouvernorat": $('#rechercher').val()}] }).fetch();
    },

    'slide #price-min': function(event, ui){
        startPos =$("#price-min").slider('getValue').val();
        $('.form-group').children('div').mouseup(function() {


            var str = startPos.toString();
            Session.set("prix", str);
            Tracker.autorun(function () {
                //  prix=Session.get("prix");
                if (Session.get("prix") != null) {
                    var index = Session.get("prix").indexOf(",");
                    first = parseInt(Session.get("prix").substr(0, index));
                    last = parseInt(Session.get("prix").substr(index + 1));
                }
            });


            });
},



});
