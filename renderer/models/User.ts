import { Schema, model } from 'mongoose';
import { IUser } from '../interfaces';
import mongoose from 'mongoose';
import { Model } from 'mongoose';

const userSchema = new Schema<IUser>({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
}, {
    timestamps: true,
})

const User: Model<IUser> = mongoose.models.User || model('User', userSchema);

export default User;