import * as mongoose from 'mongoose';

export interface Item extends mongoose.Document {
    id?: string;
    title: string;
    status: string;
}