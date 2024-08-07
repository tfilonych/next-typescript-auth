import mongoose, { model, Schema } from 'mongoose';

export interface IUser {
  email: string;
  password: string;
  username: string;
}

const schema = new Schema<IUser>({
  email: {
    type: String,
    unique: true,
    required: true,
  },
  username: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});
export default mongoose.models?.User || model('User', schema);
