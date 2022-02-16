//Connection to model 
const ddbFuncs = require('../models/dynamo');

//functions
const homeController = (req, res) => {
    res.send('HELLO WORLD');
}

const addCharacterToDynamo = (req, res) => {
    try{
        const { id, name, occupation } = req.body;
        const addedChar = ddbFuncs.addCharacter(id, name, occupation);
        res.send("Success");
    }catch (err) {
        console.log('ERROR: ' + err)
    }
}

//export functions
module.exports = {
    homeController,
    addCharacterToDynamo
}