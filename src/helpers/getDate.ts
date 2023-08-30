export const getDate = () => {
    let objectDate = new Date();
    let day = objectDate.getDate();
    let month = objectDate.getMonth();
    let year = objectDate.getFullYear();
    return `${day}/${month}/${year}`
}
