function handleError(err, req, res, next) {
    console.error(err.stack)
    console.error(err.message)
    const errors = {
        "error reject" : {
            statusReturn: 500,
            writeToLog: "not good!!"}};

    let errObj = errors[err.message];

    if (!errObj){
        errObj = {
            statusReturn : 500,
            writeToLog: "General Error"
        }
    }
    res.status(errObj.statusReturn).send('Something broke!:' + errObj.writeToLog)
}

module.exports = {
    handleError
};