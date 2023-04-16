import type { NextPage } from 'next'

import { Typography} from '@mui/material'
import { initialData } from '../database/products'
import { ProductList } from '../components/products'
import { ShopLayout } from '../components/layaouts'
import { useProducts } from '../hooks'
import { FullScreenLoading } from '../components/ui'




const Home: NextPage =  () => {
//, isLoading
    const {products} = useProducts('/products')

    
    return(
        <ShopLayout title='E-commerce' pageDescription={'FIND THE  BEST PRODUCTS EVER'}>
            <Typography variant='h1' component={'h1'}>Home</Typography>
            <Typography variant='h2' sx={{mb:1}}>All products</Typography>

            {  products &&(
                        <ProductList products={products}/>
                  ) 
                  }

           
        </ShopLayout>
    )
}

export default Home