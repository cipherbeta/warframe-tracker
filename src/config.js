import moment from 'moment';

const DATAURL = "http://localhost:3001/";

const DATEFIX = (date) => {
    return moment.unix(date.substring(0,10)).calendar();
}

export {
    DATAURL, DATEFIX
}