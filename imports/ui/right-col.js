/**
 * Created by Uy on 05.03.2017.
 */
import { Template } from 'meteor/templating';
import { Shows } from '../api/shows.js';
import moment from 'moment';
import 'moment/locale/nb';

import '../../client/main.html';

Template.body.helpers({
    shows() {
        const allShows = Shows.find({});
        const dayNameFormat = 'dddd';
        const dayNumberFormat = 'DD';
        const monthFormat = 'MMM';
        const timeFormat = 'HH:mm';

        return allShows.map((show)=>{
            const dayName = moment(show.dateFrom).locale('nb').format(dayNameFormat);
            const dayNumber = moment(show.dateFrom).format(dayNumberFormat);
            const month = moment(show.dateFrom).locale('nb').format(monthFormat);
            const timeFrom = moment(show.dateFrom).format(timeFormat);
            const timeTo = moment(show.dateTo).format(timeFormat);

            return {dayName, dayNumber, month, timeFrom, timeTo, soldOut: show.soldOut};
        });
    },
    showsCount() {
        const allShows = Shows.find({}).fetch();
        if(allShows.length == 0) {
            return 0;
        }
        const count = allShows.reduce((acc, show)=>{
            return show.soldOut ? acc : acc + 1;
        }, 0);
        return count;
    },
});