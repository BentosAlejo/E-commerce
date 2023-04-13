import mongoose,{ Schema, model, Model} from 'mongoose'
import { IProduct } from '../interfaces';



const productSchema = newSchema({
    description: {type: String, required: true},
    images:[{type:String}]
    inStock: { type: Number, required:true, default:0},
    price: { type: Number, required:true, default:0 }
    sizes:[{
        type: String,
        enum:{
            values:['XS','S','M','L','XL','XXL','XXXL'],
            message: '{VALUE} Not a valid size'
        }
    }],
    slug:{type:String, required:true, unique:true},
    tags:[{type:String}],
    title:{type:String, required:true},
    type:{
        type: String,
        enum:{
            values:['shirts','pants','hoodies','hats'],
            message: '{VALUE} Not a valid type'
        }
    },
    gender:{
        type: String,
        enum:{
            values:['men','women','kids', 'unisex'],
            message: '{VALUE} Not a valid gender'
        }
    },
},{
    timeStamps:true
});

// TODO: CREAR INDICE

const Product: Model<IProduct> = mongoose.models.Product || model('Product', productSchema)

export default Product
