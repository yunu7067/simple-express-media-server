import {Mongoose, connect, Model, Document, Types} from 'mongoose';
import {DatabaseConfigType} from '../type';
import MediaModel, {MediaType} from './model/MediaModel';

async function connectDB(databaseConfig: DatabaseConfigType) {
  return await connect(databaseConfig.host);
}

async function saveDB(doc: Document<unknown, any, MediaType> & MediaType & {_id: Types.ObjectId}) {
  return await doc.save();
}

export default connectDB;
export {saveDB};
