import { ICartProduct } from '../../../interfaces/cart'
import { CartState } from './'

type CartActionType = 
  |  { type: '[Cart] - LoadCart from cookies | storage', payload: ICartProduct[] }
  |  { type: '[Cart] - Add Product', payload: ICartProduct }


export const cartReducer = ( state: CartState, action: CartActionType) : CartState =>{


    switch ( action.type ){
        case '[Cart] - LoadCart from cookies | storage':
            return {
                ...state
            }

        default:
            return state
    }



}