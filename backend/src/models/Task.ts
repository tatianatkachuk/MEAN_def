import { Schema, model, Document } from 'mongoose'

const schema = new Schema({
    name: String,
    difficulty: String,
    deadline: String    
},
{
    timestamps: true,
    versionKey: false
});

export interface ITask extends Document {
    name: string;
    difficulty: string;
    deadline: string;
}

export default model<ITask>('Task', schema);