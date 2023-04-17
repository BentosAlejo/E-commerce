
import {NextPage, GetServerSideProps, GetStaticPaths, GetStaticProps} from 'next'
import { Box, Typography, Grid, Button, Chip} from '@mui/material'
import { ShopLayout } from '../../components/layaouts'
import { ItemCounter } from '../../components/ui'
import { SizeSelector } from '../../components/products'
import ProductSlideShow from '../../components/products/ProductSlideShow'
import {useState} from 'react'
import { IProduct, ISize } from '../../interfaces'
import { dbProducts } from '../../database'
import { ICartProduct } from '../../interfaces/cart'
interface Props{
    product:IProduct
}




const ProductPage:NextPage<Props> = ({product}) => {

    // const router = useRouter()

    // const {products: product, isLoading} = useProducts(`/products/${router.query.slug}`)

    const [tempCartProduct, setTempCartProduct] = useState<ICartProduct>({
        _id: product._id,
        image: product.images[0],
        price: product.price,
        size: undefined,
        slug: product.slug,
        title: product.title,
        gender: product.gender,
        quantity: 1,
    })


    const selectedSize = (size: ISize) =>{
        setTempCartProduct( currentProduct => ({
            ...currentProduct,
            size
        }))
    }

    const onUpdateQuantity = (quantity: number)=>{
        setTempCartProduct( currentProduct => ({
            ...currentProduct,
            quantity
        }))
    }


    const onAddProduct = ()=>{

    }


   

  return (
    <ShopLayout title={product.title} pageDescription={product.description}>
        <Grid container spacing={3}>

            <Grid item xs={12} sm={7}>
                <ProductSlideShow
                    images={ product.images}
                />
            </Grid>

            <Grid item xs={12} sm={5}>
                <Box display={'flex'} flexDirection={'column'}>
                    <Typography variant='h1' component={'h1'}>{`${product.title}`}</Typography>
                    <Typography variant='subtitle1' component={'h2'}>{`$${product.price}`}</Typography>

                    <Box sx={{my:2}}>
                        <Typography variant='subtitle2'>Quantity</Typography>
                        <ItemCounter
                            currentValue={tempCartProduct.quantity}
                            updatedQuantity={onUpdateQuantity}
                            maxValue={ product.inStock > 10 ? 10: product.inStock }
                        />
                        <SizeSelector
                            selectedSize={ tempCartProduct.size} 
                            sizes={product.sizes}
                            onSelectedSize={selectedSize}
                        />
                        {/* item counter */}
                    </Box>
                    

                    {/* agregar al carrit0*/}
                    {
                        (product.inStock > 0)
                        ?(
                            <Button 
                                color='secondary' 
                                className='circular-btn'
                                onClick={onAddProduct}
                                >
                                {
                                    tempCartProduct.size
                                    ? 'Add to cart'
                                    : 'Select size'

                                }
                            </Button>

                        ):(
                            <Chip label='Not available' color='error' variant='outlined'/>
                        )
                    }

                    <Box sx={{mt:3}}>
                        <Typography variant='subtitle2' sx={{mt:3}}>Description</Typography>
                        <Typography variant='body2' sx={{mt:3}}>{ product.description }</Typography>
                    </Box>
                </Box>
            </Grid>


        </Grid>
    </ShopLayout>
  )
}


// getStaticPaths...
export const getStaticPaths: GetStaticPaths = async(ctx)=>{

    const productSlugs = await dbProducts.getAllProductSlugs()

    return{
        paths: productSlugs.map(({slug})=>({
            params:{
                slug
            }
        })),
        fallback:'blocking'
    }
}
//getStaticProps...


export const getStaticProps: GetStaticProps = async({params})=>{
    const { slug = ''} = params as {slug:string}
    const product = await dbProducts.getProductBySlug(slug)

    if(!product){
        console.log('ERROR NO HAY PRODUCTO')
        return{
            redirect:{
                destination:'/',
                permanent:false
            }
        }
    }

    return{
        props:{
            product
        },
        revalidate: 60 * 60 * 24
    }


}
export default ProductPage

// export const getServerSideProps: GetServerSideProps = async({params}) =>{
//     const {slug = ''} = params as {slug:string}
//     const product = await dbProducts.getProductBySlug( slug )
//     if(!product){
//        return {

//            redirect:{
//                destination:'/',
//                permanent: false
//            }
//        }
//     }

//     return{
//         props:{
//             product
//         }
//     }
// }