import type { NextPage } from 'next'

import { Typography} from '@mui/material'
import { initialData } from '../database/products'
import { ProductList } from '../components/products'
import { ShopLayout } from '../components/layaouts'


const Home: NextPage =  () => {
    return(
        <ShopLayout title='E-commerce' pageDescription={'FIND THE  BEST PRODUCTS EVER'}>
            <Typography variant='h1' component={'h1'}>Home</Typography>
            <Typography variant='h2' sx={{mb:1}}>All products</Typography>

           <ProductList
                products={ initialData.products as any}
           />
        </ShopLayout>
    )
}

export default Home