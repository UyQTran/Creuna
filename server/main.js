import { Meteor } from 'meteor/meteor';
import '../imports/api/shows.js';
import { Shows } from '../imports/api/shows.js';

Meteor.startup(() => {
  // code to run on server at startup
    Shows.remove({});
    Shows.insert({ dateFrom: new Date("2017-02-10T18:00:00"), dateTo: new Date("2017-02-10T21:00:00"), soldOut: true, createdAt: new Date() });
    Shows.insert({ dateFrom: new Date("2017-02-11T18:00:00"), dateTo: new Date("2017-02-11T21:00:00"), soldOut: false, createdAt: new Date() });
    Shows.insert({ dateFrom: new Date("2017-02-17T18:00:00"), dateTo: new Date("2017-02-17T21:00:00"), soldOut: false, createdAt: new Date() });
    Shows.insert({ dateFrom: new Date("2017-02-18T18:00:00"), dateTo: new Date("2017-02-18T21:00:00"), soldOut: false, createdAt: new Date() });
    Shows.insert({ dateFrom: new Date("2017-02-21T18:00:00"), dateTo: new Date("2017-02-21T21:00:00"), soldOut: false, createdAt: new Date() });
});
