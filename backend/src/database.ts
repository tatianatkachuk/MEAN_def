import { connect } from 'mongoose'

const MONGODB_URI = 'mongodb+srv://telematica:telematica@cluster0.twlws.mongodb.net/employeesdb?retryWrites=true&w=majority';


export async function startConnection() {
    const db = await connect(MONGODB_URI,{
        //useUnifiedTopology: true,
        //useNewUrlParser: true,
        //useFindAndModify: false 
    });

    console.log('Database is connected');
    
}