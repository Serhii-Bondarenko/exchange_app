export const dateFormatter = () => {

    let day = new Date().getDate();
    if (day < 10) day = '0' + day;

    let month = new Date().getMonth() + 1;
    if (month < 10) month = '0' + month;

    let year = new Date().getFullYear();

    return `${day}.${month}.${year}`;
}
