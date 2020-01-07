const PetsModel = require('../model/petsModel');

// Display list of all Pets.
petsList = function (req, res) {
    res.send('NOT IMPLEMENTED: Pets list');
};

petsDetail = async function (req, res, next) {
    // res.send('NOT IMPLEMENTED: Pet detail: ' + req.params.id);
    const {name, id} = req.ctx;
    const petId = req.params.id;
    // return PetsModel.displayDetail(petId).then((details) => {
    //     res.status(200).send(details);
    // }).catch(error => {
    //     next(error)
    // });

    let details;

    try{
         details = await PetsModel.displayDetail(petId);
    }catch (e) {
        next(e);
    }
    res.status(200).send(details);


};

myPromiseAll = async (...promises)=>{
    const resArr =[];

    for (let i=0; i<promises.length;i++){
        try{
            resArr.push(await promises[i]());
        }catch (e) {
            return e
        }

    }

    return resArr;
};

petCreate = function (req, res) {
    res.send('NOT IMPLEMENTED: Pets create');
};


module.exports = {
    petsList,
    petById: petsDetail,
    createPet: petCreate
};