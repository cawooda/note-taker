module.exports = () => {

    const result = Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    console.log("uuid",result);
    return result;
}