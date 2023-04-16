import type { NextPage, GetServerSideProps } from 'next'

import { Typography} from '@mui/material'
import { dbProducts } from '../../database'
import { ProductList } from '../../components/products'
import { ShopLayout } from '../../components/layaouts'


import { IProduct } from '../../interfaces'



interface Props {
    products: IProduct[]
    foundProducts: boolean
    query:string
}


const SearchPage: NextPage<Props> =  ({products, foundProducts, query}) => {
//, isLoading


    
    return(
        <ShopLayout title='E-commerce- search' pageDescription={'FIND THE  BEST PRODUCTS EVER'}>
            <Typography variant='h1' component={'h1'}>Search product</Typography>
            {
                foundProducts 
                ? <Typography variant='h2' sx={{mb:1}}>{query}</Typography>
                : <>
                    <Typography variant='h2' sx={{mb:1}}>Product not found</Typography>
                    <Typography variant='h6' sx={{mb:1}} color='secondary'>Product: "{query}" not found</Typography>
                  </>
            }
            

                
                    <ProductList products={products}/>

                
                

           
        </ShopLayout>
    )
}



export const getServerSideProps: GetServerSideProps = async({params})=>{
    const {query = ''} = params as {query:string}


    if(query.length === 0){
        return{
            redirect:{
                destination:'/',
                permanent:true
            }
        }
    }


    let products = await dbProducts.getProductsByTerm(query)

    const foundProducts = products.length > 0

    if(!foundProducts){
         products = await dbProducts.getAllProducts()
    }


    return {
        props:{
            products,
            foundProducts,
            query,
        }
    }


}









export default SearchPage