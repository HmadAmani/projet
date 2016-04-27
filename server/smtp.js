/**
 * Created by Amani on 27/04/2016.
 */
Meteor.startup(function () {
    smtp = {
        username: 'ameni.hmad@gmail.com',
        password: '26061991',
        server:   'smtp.gmail.com',
        port: 465
    }


    process.env.MAIL_URL = 'smtp://' + encodeURIComponent(smtp.username) + ':' + encodeURIComponent(smtp.password) + '@' + encodeURIComponent(smtp.server) + ':' + smtp.port;
    Accounts.config({
        sendVerificationEmail: true,
        forbidClientAccountCreation: false
    });

});
