import {Schema, model} from 'mongoose';

interface MediaType {
  fieldname: string;
  originalname: string;
  encoding: string;
  mimetype: string;
  filename: string;
  path: string;
  size: number;
  additional?: object | undefined;
}

const MediaSchema = new Schema<MediaType>({
  fieldname: {type: String, required: true},
  originalname: {type: String, required: true},
  encoding: {type: String, required: true},
  mimetype: {type: String, required: true},
  filename: {type: String, required: true},
  path: {type: String, required: true},
  size: {type: Number, required: true},
  additional: Object,
});

const MediaModel = model<MediaType>('User', MediaSchema);

export default MediaModel;
export {MediaSchema};
export type {MediaType};
