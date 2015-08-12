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

    PlayersFilter = new Meteor.FilterCollections(Players, {
        template: 'player'
            // Other arguments explained later. See Configuration.
    });

}

if (Meteor.isServer) {
    Meteor.startup(function() {
        //
    });

    Meteor.FilterCollections.publish(Players, {
        name: 'people-lite'
    });
}
//
// PlayersFilter = new Meteor.FilterCollections(Players, {
//     filters: {
//         name: {
//             title: 'name',
//             operator: ['$regex', 'i'],
//             condition: '$and',
//             searchable: true
//         },
//         points: {
//             title: 'points',
//             operator: ['$eq', '$gte', '$lte'],
//             condition: '$and',
//             searchable: true
//         },
//         registerd: {
//             title: 'registered',
//             operator: ['$eq'],
//             condition: '$and',
//             searchable: true
//         }
//     }
// });

PlayersFilter = new Meteor.FilterCollections(Players, {
    name: 'player-lite',
    template: 'playersList',
    filters: {
        "name": {
            title: 'Name',
            operator: ['$regex', 'i'],
            condition: '$and',
            searchable: 'required'
        }
    }
});
