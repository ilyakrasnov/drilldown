if (Meteor.isClient) {
    // counter starts at 0
    Session.setDefault('counter', 0);

    Template.body.helpers({
        counter: function() {
            return Session.get('counter');
        },
        getPlayer: function() {
            return players;
        }
    });

}

if (Meteor.isServer) {
    Meteor.startup(function() {
        // code to run on server at startup
    });
}

var players = [{
    name: "Ilya",
    points: "100",
    registered: "true",
    startDate: "23.03.2015"
}, {
    name: "Michi",
    points: "10",
    registered: "false",
    startDate: "15.04.2015"
}, {
    name: "Peter",
    points: "50",
    registered: "true",
    startDate: "10.10.2010"
}];
