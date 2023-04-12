import React from 'react'
import { Typography, Box } from '@mui/material'
import { ShopLayout } from '../components/layaouts'

const Custom404 = () => {
  return (
    <ShopLayout title='Page not found' pageDescription='Nothing to show here'>
        <Box sx={{
            display:'flex', 
            justifyContent:'center', 
            alignItems:'center', 
            height:'calc(100vh - 200px)' ,
            flexDirection:{xs:'column',sm:'row' }
            }}>

            <Typography variant='h1' component={'h1'} fontSize={{xs:20, sm:60}} fontWeight={200}>404</Typography>
            <Typography marginLeft={2} variant='h1' component={'h1'} fontSize={{xs:20, sm:60}} fontWeight={200}>PAGE NOT FOUND</Typography>

        </Box>
    </ShopLayout>
  )
}

export default Custom404
