// const displayDetail = id => {
//     return asyncFunc(3).then((num) => {
//         console.log("this is num!", num)
//         return `id is ${id} num ${num}`;
//     });
//
// };
const displayDetail = async (id) =>{
    const num= await asyncFunc(3);
    console.log("this is num!", num);
    return `id is ${id} num ${num}`;
};

const asyncFunc = (ms) => {
    return new Promise((resolve, reject) => setTimeout(() => {
        Math.random() > 0.5 ? resolve(5):
            Math.random() > 0.5?
            reject(new Error('error reject')) :reject(new Error('shai'))

    }, ms));

};

module.exports = {
    displayDetail
};