import type { NextPage } from 'next'

import { Typography} from '@mui/material'
import { ProductList } from '../../components/products'
import { ShopLayout } from '../../components/layaouts'
import { useProducts } from '../../hooks'
import { FullScreenLoading } from '../../components/ui'


const Men: NextPage =  () => {

    const {products, isLoading} = useProducts('/products?gender=men')

    
    return(
        <ShopLayout title='E-commerce - Men' pageDescription={'FIND THE  BEST PRODUCTS EVER 4 men'}>
            <Typography variant='h1' component={'h1'}>Men</Typography>
            <Typography variant='h2' sx={{mb:1}}>Men's products</Typography>

                   
                 
                        {
                            isLoading
                                ? <FullScreenLoading/>
                                :<ProductList products={products}/>
                        }
                        
                        
                  
                 
            
        </ShopLayout>
    )
}

export default Men