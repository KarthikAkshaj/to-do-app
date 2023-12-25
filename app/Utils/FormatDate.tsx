const moment = require("moment/moment");

const formatDate = (date: any) => {
    return moment(date).format("DD/MM/YYYY");
};

export default formatDate;
