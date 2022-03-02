import mongoose, {Document, Types} from 'mongoose';
import {DatabaseConfigType} from '../type';
import {MediaType} from './model/MediaModel';

async function connectDB(databaseConfig: DatabaseConfigType) {
  try {
    console.log(databaseConfig.host);
    return await mongoose.connect(databaseConfig.host, databaseConfig.options);
  } catch (error) {
    return Promise.reject(error);
  }
}

async function saveDB(doc: Document<unknown, any, MediaType> & MediaType & {_id: Types.ObjectId}) {
  return await doc.save();
}

export default connectDB;
export {saveDB};
