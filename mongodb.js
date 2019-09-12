const { MongoClient, ObjectID } = require('mongodb');

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';

MongoClient.connect(connectionURL, { useNewUrlParser: true, useUnifiedTopology: true }, (error, client) => {
    if (error) {
        return console.log('Connection error:', error);
    }

    const db = client.db(databaseName);

    // db.collection('users').deleteMany({
    //     age: 2000
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })

    db.collection('tasks').deleteOne({ 
        description: 'Mongodb insert challenge'
    }).then((result) => {
        console.log(result)
    }).catch((error) => {
        console.log(error)
    })

});