/**
 * Created by Amani on 02/05/2016.
 */
Email.send({
    to: "amani@gmail.com",
    from: "ameni.hmad@gmail.com",
    subject: "Example Email",
    html: "<p><strong>This will render as bold text</strong>, but this will not.</p>"
});
/*SSR.compileTemplate( 'htmlEmail', Assets.getText( 'html-email.html' ) );

var emailData = {
    name: "Doug Funny",
    favoriteRestaurant: "Honker Burger",
    bestFriend: "Skeeter Valentine"
};

Email.send({
    to: "to.address@email.com",
    from: "from.address@email.com",
    subject: "Example Email",
    html: SSR.render( 'htmlEmail', emailData )
});*/