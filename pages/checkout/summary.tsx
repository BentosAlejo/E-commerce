import React from 'react'
import { ShopLayout } from '../../components/layaouts'
import { Card, CardContent, Divider, Grid, Typography, Box, Button} from '@mui/material'
import { CartList } from '../../components/cart'
import { OrderSummary } from '../../components/cart/OrderSummary'
import NextLink from'next/link'

 const Summary = () => {
  return (
    <ShopLayout title='Order resume' pageDescription='Order resume'>
        <Typography variant='h1' component={'h1'}>Order resume</Typography>

        <Grid container>
            <Grid item xs={12} sm={7}>
                <CartList />
            </Grid>
            <Grid item xs={12} sm={5}>
                <Card className='summary-card'>
                    <CardContent>
                        <Typography>Resume (3 products)</Typography>
                        <Divider sx={{my:1}}/>
                        <Box display={'flex'} justifyContent={'end'}>
                            <NextLink href='/checkout/adress' passHref>
                                <Typography>Edit</Typography>
                            </NextLink>
                        </Box>

                        <Typography>Delivery Adress</Typography>
                        <Typography>Sweeny Todd</Typography>
                        <Typography>666, Fleet st</Typography>
                        <Typography>Liverpool, London</Typography>
                        <Typography>England</Typography>
                        <Typography>+6 66 666666</Typography>

                        <Divider sx={{my:3}}/>

                        <Box display={'flex'} justifyContent={'end'}>
                            <NextLink href='/checkout/adress' passHref>
                                <Typography>Edit</Typography>
                            </NextLink>
                        </Box>


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

export default Summary

