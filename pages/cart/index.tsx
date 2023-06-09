import React from 'react'
import { ShopLayout } from '../../components/layaouts'
import { Card, CardContent, Divider, Grid, Typography, Box, Button} from '@mui/material'
import { CartList } from '../../components/cart'
import { OrderSummary } from '../../components/cart/OrderSummary'

 const CartPage = () => {
  return (
    <ShopLayout title='Cart' pageDescription='Shopping Cart'>
        <Typography variant='h1' component={'h1'}>Cart</Typography>

        <Grid container>
            <Grid item xs={12} sm={7}>
                <CartList editable/>
            </Grid>
            <Grid item xs={12} sm={5}>
                <Card className='summary-card'>
                    <CardContent>
                        <Typography>Order</Typography>
                        <Divider sx={{my:1}}/>


                        <OrderSummary/>
                        
                        
                        <Box sx={{mt:3}}>
                            <Button color='secondary' className='circular-btn' fullWidth>
                                Checkout
                            </Button>
                        </Box>
                    </CardContent>

                </Card>
            </Grid>
        </Grid>




    </ShopLayout>
  )
}

export default CartPage

