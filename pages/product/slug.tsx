import React from 'react'
import { ShopLayout } from '../../components/layaouts'
import { initialData } from '../../database/products'
import { Box, Typography, Grid, Button} from '@mui/material'
import ProductSlideShow from '../../components/products/ProductSlideShow'
import { ItemCounter } from '../../components/ui'
import { SizeSelector } from '../../components/products'



const product = initialData.products[0]


const slug = () => {
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
                        <ItemCounter/>
                        <SizeSelector
                            selectedSize={product.sizes[0]} // no funciona estilo, preguntar
                            sizes={product.sizes}
                        />
                        {/* item counter */}
                    </Box>
                    

                    {/* agregar al carrit0*/}
                    <Button color='secondary' className='circular-btn'>
                        Add to cart
                    </Button>

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

export default slug
