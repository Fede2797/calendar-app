const mongoose = require('mongoose');

const dbConnection = async() => {
    try {
        
        mongoose.set('strictQuery', false);
        mongoose.connect( process.env.DB_CNN );
        console.log('Database online');

    } catch (error) {
        console.log(error);
        throw new Error('Error a la hora de inicializar la DB');
    }
}

module.exports = {
    dbConnection,
}