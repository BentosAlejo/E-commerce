import { Box, CardActionArea, CardMedia, Grid, Typography, Button} from "@mui/material"
import { initialData } from "../../database/products"
import NextLink from 'next/link'
import { ItemCounter } from "../ui"
import { FC } from "react"


const productsInCart = [
    initialData.products[0],
    initialData.products[1],
    initialData.products[2]
]

interface Props{
    editable?: boolean
}
export const CartList: FC<Props> = ({editable}) => {





  return (
    <>
        {
            productsInCart.map((product)=>(
                <Grid container key={product.slug} spacing={2} sx={{mb:1}}>
                    <Grid item xs={3}>
                        <NextLink href={'/product/slug'}>
                            <CardActionArea>
                                <CardMedia
                                    image={`/products/${product.images[0]}`}
                                    component={'img'}
                                    sx={{ borderRadius:'5px'}}
                                />
                            </CardActionArea>
                        </NextLink>
                    </Grid>
                    <Grid>
                        <Box display={'flex'} flexDirection={'column'}>
                            <Typography variant="body1">{product.title}</Typography>
                            <Typography variant="body1">Size: <strong>M</strong></Typography>


                            {
                                editable?<ItemCounter/>:<Typography>3 items</Typography>
                            }


                            



                        </Box>
                    </Grid>
                    <Grid item xs={2} display={'flex'} alignItems={'center'}>
                        <Typography variant="subtitle1">{`$${product.price}`}</Typography>
                        {
                            editable && (
                                <Button variant="text" color="secondary">
                                    Remover
                                </Button>
                            )
                        }
                        <Button variant='text' color='secondary'>
                            Remove
                        </Button>
                    </Grid>
                    
                </Grid>
            ))
        }
    
    </>
  )
}


