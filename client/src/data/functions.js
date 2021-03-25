export const getYear = (dateTime) => {
    let [month, date, year] = new Date(dateTime)
        .toLocaleDateString('en-US')
        .split('/');

    let [hour, minute, second] = new Date(dateTime)
        .toLocaleTimeString('en-US')
        .split(/:| /);

    //const hours = new Date(dateTime).getUTCHours();

    return `${month}/${date}/${year} - ${hour}:${minute}:${second}`;
};
