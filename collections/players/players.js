Players = new Mongo.Collection("players");

var Schemas = {};

Schemas.Player = new SimpleSchema({
    name: {
        type: String,
        label: "Name",
        max: 20
    },
    points: {
        type: Number,
        label: "Points"
    },
    registered: {
        type: Boolean,
        label: "Registered"
    },
    startDate: {
        type: Date,
        label: "Start date"
    }
});

Players.attachSchema(Schemas.Player);
