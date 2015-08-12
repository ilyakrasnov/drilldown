if (Meteor.isClient) {
    // counter starts at 0
    Session.setDefault('counter', 0);

    Template.body.helpers({
        counter: function() {
            return Session.get('counter');
        },
        getPlayer: function() {
            return Players.find();
        }
    });

}

if (Meteor.isServer) {
    Meteor.startup(function() {
        // code to run on server at startup
    });
}
