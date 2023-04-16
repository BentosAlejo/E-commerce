import type { NextPage } from 'next'

import { Typography} from '@mui/material'
import { ProductList } from '../../components/products'
import { ShopLayout } from '../../components/layaouts'
import { useProducts } from '../../hooks'
import { FullScreenLoading } from '../../components/ui'


const Kid: NextPage =  () => {

    const {products, isLoading} = useProducts('/products?gender=kid')

    
    return(
        <ShopLayout title='E-commerce - Kid' pageDescription={'FIND THE  BEST PRODUCTS EVER 4 men'}>
            <Typography variant='h1' component={'h1'}>Kid</Typography>
            <Typography variant='h2' sx={{mb:1}}>Kid's products</Typography>

                 
            {  products &&(
                        <ProductList products={products}/>
                  ) 
                  }
           
        </ShopLayout>
    )
}

export default Kid