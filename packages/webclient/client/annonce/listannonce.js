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

   /* 'slide #price': function(event, ui){
        startPos =$("#price").slider('getValue').val();
        $('.form-group').children('div').mouseup(function() {


            var str = startPos.toString();
            Session.set("prix", str);
            Tracker.autorun(function () {
                //  prix=Session.get("prix");
                if (Session.get("listeannonce") != null) {
                    var index = Session.get("prix").indexOf(",");
                    first = parseInt(Session.get("prix").substr(0, index));
                    last = parseInt(Session.get("prix").substr(index + 1));
                }
            });


            });
},*/



});
Template.listannonce.rendered=function(){
    if(! $('#price').data('uiSlide')){
    $('#price').slider({
        slide: function(event,ui){
            alert(ui.value)
        }
    });
}

    Template.listannonce.events({
        'click #chat': function(){
            Router.go('chat');
        }
    })
}