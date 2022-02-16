const AWS = require('aws-sdk');
require('dotenv').config();

AWS.config.update({
    region: process.env.AWS_DEFAULT_REGION,
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
});

const dynamoClient = new AWS.DynamoDB({apiVersion: '2012-08-10'})  //.DocumentClient();
const TABLE_NAME = 'express-api';

const getCharacters = async () => {
    const params = {
        TableName: TABLE_NAME
    }
    const characters = await dynamoClient.scan(params).promise();
    console.log(characters)
    return characters;
}

const addCharacter = async (id, name, occupation) => {
    const params = {
        TableName: TABLE_NAME,
        Item: {
            "id": {
                S: id
            },
            "Name": {
                S: name
            },
            "Occupation": {
                S: occupation
            }
        }
    };
    const addedCharacter = await dynamoClient.putItem(params, (err, data) => {
        if(err){
            console.log('PUT ITEM ERROR')
            console.log('ERROR: ' + err);
        } else {
            console.log('~~ SUCCESS ~~');
            console.log(data)
        }
    });
    return addedCharacter
}

module.exports = {
    getCharacters,
    addCharacter
}