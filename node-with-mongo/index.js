import {MongoClient} from 'mongodb';

const URL = "mongodb://127.0.0.1:27017/";

MongoClient.connect(URL, error => {
    if(!error) {
        console.log('Connection Success.');
    } else {
        console.log('Connection Failed.');
    }
});