import mongoose from 'mongoose'


const ConnectDb = async () => {
    const MONGO_CONNECTION = `mongodb://127.0.0.1:27017/bloodbank`
    try {
        const result =await mongoose.connect(MONGO_CONNECTION)
        console.log(`Mongoose Connection ${result.connection?.host} all ok`)
    } catch (error) {
        console.error(`Mongoose Error ${error.message}`)
    }
}

export default ConnectDb;