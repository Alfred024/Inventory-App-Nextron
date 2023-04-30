import mongoose, { Schema, model, Model } from 'mongoose';
import { IProduct } from '../interfaces';


const productSchema = new Schema<IProduct>({
    description: { type: String, required: true, default: '' },
    image: { type: String },
    inStock: { type: Number, required: true, default: 0 },
    price: { type: Number, required: true, default: 0 },
    title: { type: String, required: true, default: '' },
},{
    timestamps: true
});


productSchema.index({ title: 'text'});


const Product: Model<IProduct> = mongoose.models.Product || model('Product', productSchema );


export default Product;