import { Schema, model, Document } from 'mongoose'

const schema = new Schema({
    name: String,
    position: String,
    office: String,
    salary: String,    
},
{
    timestamps: true,
    versionKey: false
});

export interface IEmployee extends Document {
    name: string;
    position: string;
    office: string;
    salary: string;
}

export default model<IEmployee>('Employee', schema);