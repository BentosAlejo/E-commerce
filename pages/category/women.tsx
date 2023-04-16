import type { NextPage } from 'next'

import { Typography} from '@mui/material'
import { ProductList } from '../../components/products'
import { ShopLayout } from '../../components/layaouts'
import { useProducts } from '../../hooks'
import { FullScreenLoading } from '../../components/ui'


const Women: NextPage =  () => {

    const {products, isLoading} = useProducts('/products?gender=women')

    
    return(
        <ShopLayout title='E-commerce - Women' pageDescription={'FIND THE  BEST PRODUCTS EVER 4 men'}>
            <Typography variant='h1' component={'h1'}>Women</Typography>
            <Typography variant='h2' sx={{mb:1}}>Women's products</Typography>


              
            { 
             products &&(
                        <ProductList products={products}/>
                  ) 
            }

           
        </ShopLayout>
    )
}

export default Women